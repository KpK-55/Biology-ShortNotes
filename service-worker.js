/* NEET BioNotes PWA service worker
 * Keeps the app shell available offline. User notes remain in IndexedDB;
 * this cache stores application files only and never replaces user data.
 */
const CACHE_PREFIX = 'neet-bionotes-pwa-';
const CACHE_NAME = `${CACHE_PREFIX}v3`;
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  // App navigation: try the network first so deployments can update,
  // then fall back to the last cached app shell while offline.
  if (request.mode === 'navigate' && sameOrigin) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put('./index.html', response.clone());
        }
        return response;
      } catch (_) {
        return (await caches.match(request)) || (await caches.match('./index.html'));
      }
    })());
    return;
  }

  // Same-origin application files are cache-first. This avoids losing
  // offline access to the HTML, manifest and app icons.
  if (sameOrigin) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      } catch (_) {
        return cached || Response.error();
      }
    })());
    return;
  }

  // Cache public UI dependencies after their first successful visit so
  // Tailwind CDN and web fonts have a chance to remain available offline.
  // Google sign-in is intentionally not cached; cloud sync requires network.
  if (url.hostname === 'cdn.tailwindcss.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      const networkPromise = fetch(request).then(response => {
        if (response && (response.ok || response.type === 'opaque')) cache.put(request, response.clone());
        return response;
      }).catch(() => cached);
      return cached || (await networkPromise) || Response.error();
    })());
  }
});

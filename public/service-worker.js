const FILES_TO_CACHE = [
  '/',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/db.js',
  '/index.html',
  '/index.js',
  '/manifest.webmanifest',
  '/styles.css'
];

const PRE_CACHE = `pre-cache-v1`;
const RUNTIME_CACHE = `runtime-cache`;

self.addEventListener(`install`, (e) => {
  e.waitUntil(
    caches
      .open(PRE_CACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

self.addEventListener(`activate`, (e) => {
  const currentCaches = [PRE_CACHE, RUNTIME_CACHE];
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener(`fetch`, (e) => {
  if (e.request.method !== `GET` || !e.request.url.startsWith(self.location.origin)) {
    e.respondWith(fetch(e.request));
    return;
  }

  if (e.request.url.includes(`/api/transaction`)) {
    e.respondWith(caches.open(RUNTIME_CACHE)
      .then(cache => fetch(e.request)
        .then(response => {cache.put(e.request, response.clone());
          return response;
        })
        .catch(() => caches.match(e.request))
      )
    );
    return;
  }

  e.respondWith(caches.match(e.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return caches
      .open(RUNTIME_CACHE)
      .then(cache => fetch(e.request)
      .then(response => cache.put(e.request, response.clone())
        .then(() => response)
      ));
  }));
});

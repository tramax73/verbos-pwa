var cacheName = 'verbos-pwa';
var filesToCache = [
  '/verbos-pwa/',
  '/verbos-pwa/manifest.json',
  '/verbos-pwa/index.html',
  '/verbos-pwa/css/style.css',
  '/verbos-pwa/js/main.js',
  '/verbos-pwa/js/funcs.js',
  '/verbos-pwa/js/json-data.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    }).then(function() {
      // `skipWaiting()` forces the waiting ServiceWorker to become the
      // active ServiceWorker, triggering the `onactivate` event.
      // Together with `Clients.claim()` this allows a worker to take effect
      // immediately in the client(s).
      return self.skipWaiting();
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


// push da implementare
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
     clients.openWindow('https://developers.google.com/web/')
  );
});
// VERSION: 1.1
// BUILD: 101

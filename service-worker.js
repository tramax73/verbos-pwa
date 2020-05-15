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
// VERSION: 1.1

var cacheName = 'verbos-pwa';

var filesToCache = [
  '/verbos-pwa/',
  '/verbos-pwa/manifest.json',
  '/verbos-pwa/index.html',
  '/verbos-pwa/css/style.css',
  // '/verbos-pwa/js/main.js',
  '/verbos-pwa/js/funcs.js',
  '/verbos-pwa/js/json-data.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

/* handle skipWaiting */
self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();

    // 2 secs delay, helps cache refresh ...
    setTimeout(function(){
            console.log('skipWaiting triggered');
       },500); //delay is in milliseconds

  }
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});



// VERSION: 1.3 bet
// BUILD: 154

window.onload = () => {
  'use strict';

  if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log("Service Worker Registered");

          // We don't want to check for updates on first load or we will get a false
          // positive. registration.active will be falsy on first load.
          if(registration.active) {
            // Check if an updated sw.js was found
            registration.addEventListener('updatefound', () => {
              console.log('Update found. Waiting for install to complete.');
              const installingWorker = registration.installing;

              // Watch for changes to the worker's state. Once it is "installed", our cache
              // has been updated with our new files, so we can prompt the user to instantly
              // reload.
              installingWorker.addEventListener('statechange', () => {
                if(installingWorker.state === 'installed') {
                  console.log('Install complete. Triggering update prompt.');
                  onUpdateFound();
                }
              });
            });
          }
        })
        .catch(e => console.log(e));
    }

    function onUpdateFound() {
          self.skipWaiting();
          console.log("reloding serviceWorker ...");
    }


}

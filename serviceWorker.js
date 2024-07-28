/* eslint-disable no-restricted-globals */
const staticAssets = [
  '/',
  '/index.html',
  '/static/js/main.js',
  '/static/css/main.css',
  // Add other static assets you want to cache
];


self.addEventListener('install', (event) => {

  event.waitUntil(
    caches.open('static-cache-me').then((cache) => {
      console.log("adding static routes in static-cache")
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log("service worker fetch ko listen kiya")
  const request = event.request;

  // Check if the request URL is for the specific API endpoint
  if (request.url === 'https://my-json-server.typicode.com/Shubhamsharma585/SmartSteps/profile') {
    event.respondWith(
      caches.open('static-cache-me').then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            console.log('Serving from cache:', response);
            return response;
          }

          console.log('Fetching and caching:', request.url);
          return fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      }).catch(error => {
        console.error('Caching error:', error);
      })
    );
  } else {
    // Handle other requests
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request);
      })
    );
  }
});

self.addEventListener('activate', (event) => {
  console.log("sw is activated", caches, event);
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      console.log('Cache names:', cacheNames)) // List all cache names
  );
  
});

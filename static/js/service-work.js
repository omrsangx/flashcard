// WPA Flash Card
var wpaAppName = 'SV Flash Card';

var wpaAppCacheFiles = [
  '/',
  '/index.html',
  '/static/css/style.css',
  '/static/css/verb-tenses.css',
  '/static/css/mobile-layout.css',
  '/static/js/javascript.js',
  '/static/images/favicon-16x16.png',
  '/static/images/favicon-32x32.png',
  '/static/images/favicon-180x180.png',
  '/static/images/apple-touch-icon.png',
  '/static/images/favicon-192x192.png',
  '/static/images/favicon-512x512.png',
  '/static/images/favicon.ico'
];

// Starting the service work
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(wpaAppName).then(function(cache) {
      return cache.addAll(wpaAppCacheFiles);
    })
  );
});

// Serving cache content and files
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
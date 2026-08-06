const CACHE_NAME = 'nayem-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/help.html',
  '/contact.html',
  '/assets/css/style.css',
  '/assets/js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

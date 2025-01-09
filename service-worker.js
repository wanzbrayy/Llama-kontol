// service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/package.json',
                '/server.js',
                'https://img101.pixhost.to/images/341/551056071_wanzofc.jpg', // Gantilah dengan gambar yang sesuai
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
      

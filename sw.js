self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('alrajaa-v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'fan-login.html',
                'player-login.html',
                'admin-dashboard.html',
                'manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});

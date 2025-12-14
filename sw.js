const CACHE_NAME = 'spark-v1';
const urlsToCache = [
    '/spark/',
    '/spark/index.html',
    '/spark/onboarding.html',
    '/spark/onboarding1.html',
    '/spark/signup.html',
    '/spark/login.html',
    '/spark/plan.html',
    '/spark/payment.html',
    '/spark/match.html',
    '/spark/chat.html',
    '/spark/timer.html',
    '/spark/reveal.html',
    '/spark/revealed.html',
    '/spark/exit.html',
    '/spark/blueocean.jpeg',
    '/spark/fonts/CabinetGrotesk-Medium.woff2',
    '/spark/fonts/CabinetGrotesk-Medium.woff',
    '/spark/fonts/CabinetGrotesk-Medium.ttf'
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
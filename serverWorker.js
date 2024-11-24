const mawgodChach = 'Codes-Cahches'

const assets = [
    '/',
]

self.addEventListener('install', (installEv) => {
    installEv.waitUntil(caches.open(mawgodChach).then(chach => {
        chach.addAll(assets)
    }))
})

self.addEventListener('activate', (activateEv) => {
    activateEv.waitUntil(caches.keys().then(keys => {
        return Promise.all(keys.filter(key => key !== mawgodChach).map(key => caches.delete(key)))
    }))
})
    
self.addEventListener('fetch', (fetchEv) => {
    fetchEv.respondWith(
        caches.match(fetchEv.request).then(res => {
            return res || fetch(fetchEv.request).then(fetchRes => {
                return caches.open(mawgodChach).then(cache => {
                    cache.put(fetchRes.request, fetchRes.clone())
                    return fetchRes
                })
            })
        })
    )
})
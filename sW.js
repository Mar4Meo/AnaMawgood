if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./serverWorker.js').then(() => { }).catch(err => {
        console.log('Error', err)
    })
}
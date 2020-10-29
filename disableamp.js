(function() {
    Array.from(document.querySelectorAll('a')).forEach(e => {
        e.addEventListener('click', () => {window.location = e.href})
    })
})();

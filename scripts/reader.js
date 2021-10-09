window.onload = function() {
    document.body.addEventListener('mouseover', showButton)
    document.body.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.keyCode === 0 || e.keyCode === 32) {
            e.preventDefault()
            synthesize(currentText)
        }
    })
};
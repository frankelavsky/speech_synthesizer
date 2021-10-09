let currentText = '';

const showButton = (e) => {
    e.stopPropagation()
    let button = document.getElementById('speechSynthesisButton')
    if (!button) {
        button = initializeButton()
    }
    updateButton(button,e)
}
const updateButton = (button,e) => {
    if (validate(button,e)) {
        console.log(e.srcElement)
        currentText = '' + (e.srcElement.innerText || e.srcElement.getAttribute('title') || e.srcElement.getAttribute('alt'))
        button.children[0].onclick = () => {
            synthesize(currentText)
        }
        // e.srcElement.appendChild(button)
        const targetCoords = e.srcElement.getBoundingClientRect()
        button.setAttribute('style',`left: ${targetCoords.left}px; top: ${window.scrollY + targetCoords.top - 22}px`)
        removeHighlight = document.body.getElementsByClassName('highlight')
        if (removeHighlight[0]) {
            removeHighlight[0].classList.remove('highlight')
        }
        e.srcElement.classList.add('highlight')
        button.classList.remove('hidden')
    }
}
const initializeButton = () => {
    const buttonWrapper = document.createElement('div')
    buttonWrapper.id = "speechSynthesisButton"
    
    const newButton = document.createElement('button')
    newButton.setAttribute('class','tooltip hidden')
    newButton.innerText = "Press SPACEBAR to READ:"

    buttonWrapper.appendChild(newButton)
    document.body.appendChild(buttonWrapper)
    return buttonWrapper
}
const validate = (button,e) => {
    const validType = (e.srcElement && !(e.srcElement === button) && !(e.srcElement === button.children[0]) && !(e.srcElement === document.body) && !(e.srcElement === document.body.parentNode) && !(e.srcElement.classList.contains('maincontent')))
    return validType && (e.srcElement.innerText || e.srcElement.getAttribute('title') || e.srcElement.getAttribute('alt'))
}
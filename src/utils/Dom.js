function hideElement(selector) {
    const elem = window.document.querySelector(selector);
    elem.style.display = 'none';
}

function showElement(selector) {
    const elem = window.document.querySelector(selector);
    elem.style.display = 'block';
}

function toggleElement(selector) {
    const elem = window.document.querySelector(selector);

    if (elem.style.display === 'none' || !elem.style.display) {
        showElement(selector);
        return;
    }
    
    hideElement(selector);
}

function toggleVisibility(selector) {
    const elem = window.document.querySelector(selector);
    elem.classList.toggle('show');
}


export const Dom = {
    hideElement,
    showElement,
    toggleElement,
    toggleVisibility
}
export const cardStructure = () => {    
    // Container
    const container = document.createElement("div")
    container.className = "container"
    container.id = "card"

    // Window Shadow
    const wShadow = document.createElement("div")
    wShadow.className = "window-shadow"
    
    // Window
    const window = document.createElement("div")
    window.className = "window"

    // Window Top
    const wTop = document.createElement("div")
    wTop.className = "window-top"

    // Top left
    const wTopLeft = document.createElement("div")
    wTopLeft.className = "window-top-left"

    // Top left buttons
    const wTopLeftBtnPink = document.createElement("div")
    wTopLeftBtnPink.className = "window-button--pink"
    
    const wTopLeftBtnLightPink = document.createElement("div")
    wTopLeftBtnLightPink.className = "window-button--lightPink"
    
    const wTopLeftBtnBlue = document.createElement("div")
    wTopLeftBtnBlue.className = "window-button--blue"

    // Top right
    const wTopRight = document.createElement("div")
    wTopRight.className = "window-top-right"

    // Top right buttons
    const wTopRightBtnMinus = document.createElement("div")
    wTopRightBtnMinus.className = "window-button--minus"
    const minus = document.createElement("p")
    minus.className = "text"
    minus.textContent = "—"

    const wTopRightBtnPlus = document.createElement("div")
    wTopRightBtnPlus.className = "window-button--plus"
    const plus = document.createElement("p")
    plus.className = "text"
    plus.textContent = "+"

    // Window dialog
    const wDialog = document.createElement("div")
    wDialog.className = "window-dialog"

    // Quote
    const phrase = document.createElement("p")
    phrase.className = "window-dialog-phrase"

    wDialog.appendChild(phrase);

    wTopRightBtnMinus.appendChild(minus);
    wTopRightBtnPlus.appendChild(plus);
    
    wTopRight.appendChild(wTopRightBtnMinus);
    wTopRight.appendChild(wTopRightBtnPlus);
    
    wTopLeft.appendChild(wTopLeftBtnPink);
    wTopLeft.appendChild(wTopLeftBtnLightPink);
    wTopLeft.appendChild(wTopLeftBtnBlue);
    
    wTop.appendChild(wTopLeft);
    wTop.appendChild(wTopRight);
    
    window.appendChild(wTop); // wTop va antes que wDialog
    window.appendChild(wDialog);
    
    container.appendChild(wShadow);
    container.appendChild(window);


    return {
        container: container,
        setBackGroundColor( bgColor ) { wShadow.style.backgroundColor = bgColor },
        setQuote( quote ) { phrase.textContent = quote },
    }
}
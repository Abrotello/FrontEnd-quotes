export const Card = () => {

    const cardProps = {
        phrase: "",
        color: "",
        cardPosition: {
            startX: 0,
            startY: 0,
        },
        elementDOM: null
    }

    const cardMethods = {

        newX: 0,
        newY: 0,


        mouseDown( e ) {
            cardProps.cardPosition.startX = e.clientX
            cardProps.cardPosition.startY = e.clientY

            // document.addEventListener('mousemove', mouseMove)
            // document.addEventListener('mouseup', mouseUp)
        },

        mouseMove( e ) {
            this.newX = cardProps.cardPosition.startX - e.clientX
            this.newY = cardProps.cardPosition.startY - e.clientY

            cardProps.cardPosition.startX = e.clientX
            cardProps.cardPosition.startY = e.clientY
            
            // card.style.top = ( card.offsetTop - newY ) + 'px'
            // card.style.left = ( card.offsetLeft - newX ) + 'px'
            
        }, 

        mouseUp( e ) {
            // document.removeEventListener('mousemove', mouseMove)
        }
    }
    
    return {
        createCard( card ) {
            
        },
        moveCard( cardElement ) {
        },
        printLog() {
            alert("LOG")
        },
        deleteCard() {}
    }
}

/**
 * 
 * <div class="main-container">
        <div class="container" id="card">
            <div class="window-shadow" id="card-shadow"></div>
            <div class="window">
                <div class="window-top">
                    <div class="window-top-left">
                        <div class="window-button--pink"></div>
                        <div class="window-button--lightPink"></div>
                        <div class="window-button--blue"></div>
                    </div>
                    <div class="window-top-right">
                        <div class="window-button--minus">
                            <p class="text">—</p>
                        </div>
                        <div class="window-button--plus">
                            <p class="text">+</p>
                        </div>
                    </div>
                </div>
                <div class="window-dialog">
                    <p id="phrasToDisplay" class="window-dialog-phrase" id="quote">
                        Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedos.
                    </p>
                </div>
            </div>
        </div>
 * 
 * 
 * 
 */
import { Card } from "./model/card.js";
import { cardService } from "./service/cardService.js";

const card = Card()

const button = document.getElementById("add-card")

if (!button) { 
    alert("Error, intentar nuevamente") 
} else {
    const mainContainer = document.getElementById("main-container")
    button.onclick = () => {
        if(card.getCounter() < 5) {
            const cardData = cardService()
            const newCard = card.createCard( cardData )
            mainContainer.appendChild(newCard)
        } else {
            alert("Ya no es posible generar mas ventanas")
        }
    }

}

let newX = 0, newY = 0, startX = 0, startY = 0

const cardElement = document.getElementById('card')
cardElement.addEventListener('mousedown', mouseDown)

function mouseDown( e ) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove( e ) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    cardElement.style.top = ( cardElement.offsetTop - newY ) + 'px'
    cardElement.style.left = ( cardElement.offsetLeft - newX ) + 'px'
}

function mouseUp( e ) {
    document.removeEventListener('mousemove', mouseMove)
}


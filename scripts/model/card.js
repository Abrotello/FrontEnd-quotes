import { cardStructure } from "./structure.js"


export const Card = () => {

    let counter = 0

    const movementdMethods = {

        mouseDown(e) {
            const card = e.target.closest(".container")
            if (!card) return

            card.dataset.startX = e.clientX
            card.dataset.startY = e.clientY

            document.addEventListener("mousemove", this.mouseMove)
            document.addEventListener("mouseup", this.mouseUp)
        },

        mouseMove(e) {
            const card = document.querySelector(".container.moving")
            if (!card) return

            const newX = card.dataset.startX - e.clientX
            const newY = card.dataset.startY - e.clientY

            card.dataset.startX = e.clientX
            card.dataset.startY = e.clientY

            card.style.position = "absolute"
            card.style.top = `${card.offsetTop - newY}px`
            card.style.left = `${card.offsetLeft - newX}px`

        },

        mouseUp(e) {
            const card = document.querySelector(".container.moving")
            if (card) card.classList.remove("moving")
            document.removeEventListener("mousemove", this.mouseMove)
            document.removeEventListener("mouseup", this.mouseUp)
        }
    }

    return {
        createCard(card) {
            console.log("creada")
            const newCardStructure = cardStructure()
            newCardStructure.setBackGroundColor(card.color)
            newCardStructure.setQuote(card.phrase)

            const cardElement = newCardStructure.container
            cardElement.addEventListener("mousedown", function (e) {
                cardElement.classList.add("moving")
                movementdMethods.mouseDown(e)
            })

            counter++
            return cardElement
        },
        getCounter() {
            return counter
        }
    }
}
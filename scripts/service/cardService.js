export const cardService = () => {

    const colors = ["#FCD802", "#CBE8E2", "#F4619B", "#D55E60"]

    function generateRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function generateRandomPhrase() {
        return "Frase Random"
    }

    function generateRandomPosition() {
        const cardWidth = window.innerWidth * 0.25
        const cardHeight = 14 * 16 // 14rem = 224px
        
        const maxX = window.innerWidth - cardWidth
        const maxY = window.innerHeight - cardHeight

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }

    return {
        phrase: generateRandomPhrase(),
        color: generateRandomColor(),
        ...generateRandomPosition()
    }
}


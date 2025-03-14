export const cardService = () => {

    const colors = [
        "#1E4856", // Azul petróleo
        "#A66F2E", // Mostaza quemado
        "#3F5224", // Verde oliva profundo
        "#7D3B2E", // Marrón arcilla
        "#3A1F54", // Púrpura nocturno
        "#6C143E", // Vino profundo
        "#531B34", // Malva oscuro
        "#703440"  // Terracota vino
    ]

    function generateRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    async function generateRandomPhrase() {

        try {
            const response = await fetch('http://localhost:3000/api/phrases/random', {
                method: 'GET'
            })
            const data = await response.json()
            return data
        } catch( error) {
            console.log("Error: ", error.message || error)
        }
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


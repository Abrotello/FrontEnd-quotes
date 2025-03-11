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

    const quotes = [
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso.",
        "Cada día es una nueva oportunidad para cambiar tu vida.",
        "No cuentes los días, haz que los días cuenten.",
        "El único límite a tu impacto es tu imaginación y compromiso.",
        "La disciplina es el puente entre metas y logros.",
        "Si puedes soñarlo, puedes lograrlo.",
        "El fracaso es solo la oportunidad de empezar de nuevo con más inteligencia.",
        "Lo imposible es solo una opinión.",
        "La constancia supera al talento cuando el talento no se esfuerza."
    ];

    function generateRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function generateRandomPhrase() {

        /**
         * 
         * HACER LA COENXION A LA API
         *  
         */
        return quotes[Math.floor(Math.random() * quotes.length)]
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


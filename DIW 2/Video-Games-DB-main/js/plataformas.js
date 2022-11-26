const sectionCards = document.getElementById('platformCards');

export function pegarlistaplataformas(response) {
    for (let i = 0; i < response.results.length; i++) {

        // cards
        const platformCard = document.createElement("div");
        platformCard.classList.add("platformCard");
        sectionCards.append(platformCard);

        // nome
        const platformName = document.createElement("h2");
        platformName.classList.add("platformName");
        platformCard.append(platformName);
        platformName.textContent = response.results[i].name;

        

        
        
    }
}
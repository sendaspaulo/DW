import { getInfos, getNewGames, getAllPlatforms, getAchievements, getAllDlc } from "./api.js";


const sectionCards = document.getElementById('gamesCards');
const btnsend = document.getElementById('btnsend');
const sectionIdentity = document.getElementById('identity');

export function showTopGame(response) {
    for (let i = 0; i < response.results.length; i++) {

        let gamesss = response.results[i];

        
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");
        sectionCards.append(gameCard);

        
        const gameImg = document.createElement("img");
        gameImg.classList.add("gameImg");
        gameImg.src = response.results[i].background_image;
        gameCard.append(gameImg);
        gameImg.onclick = function()
        {
            window.open(`https://rawg.io/games/${gamesss.id}`,'_blank');
        }

        
        const titleMeta = document.createElement("div");
        titleMeta.classList.add("titleMeta");
        gameCard.append(titleMeta);

       
        const title = document.createElement("h2");
        title.classList.add("title");
        titleMeta.append(title);
        title.textContent = response.results[i].name;

        
        const gameMetacritic = document.createElement("div");
        gameMetacritic.classList.add("gameMetacritic");

        if (response.results[i].metacritic === null) {
            gameMetacritic.classList.add("hide");
        } else {
            gameMetacritic.innerHTML = response.results[i].metacritic;
        }
        
        titleMeta.append(gameMetacritic);

        
        const gameDate = document.createElement("p");
        gameDate.classList.add("gameDate");
        gameDate.innerHTML = response.results[i].released;
        gameCard.append(gameDate);

        
        const gameGenres = document.createElement("p");
        gameGenres.classList.add("gameGenres");
        gameGenres.innerHTML = response.results[i].genres[0].name;
        gameCard.append(gameGenres);

       
        const screenTxt = document.createElement("p");
        screenTxt.classList.add("screenTxt");
        screenTxt.textContent = "Screenshots:";
        const zoneImg = document.createElement("div");
        zoneImg.classList.add("zoneImg");
        const gameScreenshots = document.createElement("img");
        gameScreenshots.classList.add("gameScreenshots");
        gameScreenshots.setAttribute("src", response.results[i].short_screenshots[1].image);
        gameCard.append(screenTxt);
        gameCard.append(zoneImg);
        zoneImg.append(gameScreenshots);

        
        
    }
}

function storeValueLocal() {
    const allInputs = document.querySelectorAll("input");
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    const data = {
        name : inputName.value,
        email : inputEmail.value,
        message : inputMessage.value,
    }
    
    inputName.addEventListener('input', storeValueLocal);
    inputEmail.addEventListener('input', storeValueLocal);
    inputMessage.addEventListener('input', storeValueLocal);
    
    btnsend.addEventListener('click', function(e) {
        e.preventDefault();
        const dataStringified = JSON.stringify(data);
        localStorage.setItem("datas", dataStringified);


        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
    });
}

function showValueLocal() {
    const getDataFromLocalStorage = localStorage.getItem("datas");
    const dataParsed = JSON.parse(getDataFromLocalStorage);

    if (localStorage.length === 0) {
        sectionIdentity.classList.add("");
    } else {
        
        const txtName = document.createElement("h3");
        txtName.classList.add('txtName');
        txtName.textContent = `Paulo Henrique Sendas Resende, Ciência da Computação, matricula 677646`;
        sectionIdentity.append(txtName);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (window.location.pathname.includes("index.html")) {
        getInfos();
        showValueLocal();
    } else if (window.location.pathname.includes("new.html")) {
        getNewGames();
    } else if (window.location.pathname.includes("platform.html")) {
        getAllPlatforms();
    } else if (window.location.pathname.includes("achievements.html")) {
        getAchievements();
    } else if (window.location.pathname.includes("additions.html")) {
        getAllDlc();
    } else if (window.location.pathname.includes("contact.html")) {
        storeValueLocal();
    }
});
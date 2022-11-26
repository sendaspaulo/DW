import {showTopGame} from "./main.js";
import {getPlatformList} from "./platform.js";
import {getAchievementsList} from "./achievements.js";
import {getDlcList} from "./additions.js";


let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const API_KEY = "260d5e089966436fb223be3389788dbb"; 


export async function getInfos() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-20,2022-11-25&platforms=18,1,7`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};

export async function getNewGames() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};

export async function getAllPlatforms() {
    try {
        const res = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const resParsed = await res.json();
        getPlatformList(resParsed);
        return resParsed;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    };
};

export async function getAchievements() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games/4200/achievements?key=${API_KEY}`);
        const resParsed = await res.json();
        getAchievementsList(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
}

export async function getAllDlc() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games/4200/additions?key=${API_KEY}`);
        const resParsed = await res.json();
        getDlcList(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
}
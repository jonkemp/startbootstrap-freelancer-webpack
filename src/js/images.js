import profile from '../img/profile.png';
import cabin from '../img/portfolio/cabin.png';
import cake from '../img/portfolio/cake.png';
import game from '../img/portfolio/game.png';
import circus from '../img/portfolio/circus.png';
import safe from '../img/portfolio/safe.png';
import submarine from '../img/portfolio/submarine.png';

export default function () {
    const profileImg = document.querySelector("img[data-src='profile']");
    profileImg.src = profile;

    const cabinImg = document.querySelector("img[data-src='cabin']");
    cabinImg.src = cabin;

    const cakeImg = document.querySelector("img[data-src='cake']");
    cakeImg.src = cake;

    const gameImg = document.querySelector("img[data-src='game']");
    gameImg.src = game;

    const circusImg = document.querySelector("img[data-src='circus']");
    circusImg.src = circus;

    const safeImg = document.querySelector("img[data-src='safe']");
    safeImg.src = safe;

    const submarineImg = document.querySelector("img[data-src='submarine']");
    submarineImg.src = submarine;
}
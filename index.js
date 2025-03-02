const animes = [
    { name: "Naruto", image: "https://th.bing.com/th/id/R.160996cf6ef5648c932a0fe3f65cedec?rik=IZe5YGYqOO6Xjg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2fc%2fc%2f1322240-naruto-uzumaki-wallpaper-2560x2048-notebook.jpg&ehk=Vf%2fI1afaN258tnNww8JIGZDlqwKF9Jwkg5Is291v%2b%2fo%3d&risl=&pid=ImgRaw&r=0" },
    { name: "One Piece", image: "https://th.bing.com/th/id/R.b10e8b32dd7d53e8ef3dbd3733e4e1c7?rik=VeP2GngejbhXtQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f7%2f3%2f1486272-download-free-one-piece-wallpaper-1920x1080-1920x1080-iphone.jpg&ehk=P0ZFcRl4hTHwDsXMNC%2fbaucIyokpBkgzXBXceADwIUM%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Attack on Titan", image: "https://th.bing.com/th/id/OIP.POVEnN_dkNKh-iRXMXKQNgHaEK?rs=1&pid=ImgDetMain" },
    { name: "Death Note", image: "https://th.bing.com/th/id/OIP.Cs-ut0xsKPRxcD9qUD8lswHaD4?rs=1&pid=ImgDetMain" },
    { name: "Dragon Ball Z", image: "https://th.bing.com/th/id/R.a3ddd2ed4096db3f995f4c10c851a562?rik=78gNQhFRleF1mQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26400000%2fDragonball-Z-dragon-ball-z-26433976-1600-1200.jpg&ehk=%2fQ96vrKmvy8rYpANBFrj90A6wEvv9DSDXT52rq2jsn8%3d&risl=&pid=ImgRaw&r=0" }
];

let currentAnime;
let attempts = 3;

function startGame() {
    attempts = 3;
    currentAnime = animes[Math.floor(Math.random() * animes.length)];
    document.getElementById("anime-image").src = currentAnime.image;
    document.getElementById("result").innerText = "";
    document.getElementById("guess-input").value = "";
}

function checkAnswer() {
    const guess = document.getElementById("guess-input").value.trim();
    if (guess.toLowerCase() === currentAnime.name.toLowerCase()) {
        document.getElementById("result").innerText = "Parabéns! Você acertou!";
        setTimeout(startGame, 2000);
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById("result").innerText = `Errado! Você tem ${attempts} tentativa(s) restante(s).`;
        } else {
            document.getElementById("result").innerText = `Você perdeu! A resposta era: ${currentAnime.name}`;
            setTimeout(startGame, 2000);
        }
    }
}

// Inicializa o jogo na primeira carga da página
startGame();
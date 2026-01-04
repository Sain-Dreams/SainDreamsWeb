const screenshots = [
    'assets/images/mindwave/1.jpg',
    'assets/images/project-world/1.jpg',
    'assets/images/lavaris/bg.png',
    'assets/images/mindwave/2.jpg',
    'assets/images/project-world/3.jpg',
    'assets/images/lavaris/bg.png',
    'assets/images/mindwave/3.jpg',
    'assets/images/project-world/4.jpg',
    'assets/images/lavaris/bg.png'
];

const text = "Apenas um desenvolvedor solo movido pela paixão de criar mundos e experiências imersivas. Desde 2022, venho transformando ideias em realidade, atuando em todas as etapas da produção — do código ao game design. Sou o criador da Sain&nbsp;Dreams, onde foco no desenvolvimento de projetos como Mindwave: The Sanity e Project World, sempre buscando o equilíbrio entre técnica e atmosfera."

let currentIndex = 0;
const heroLogoElement = document.querySelector('.hero-logo');

function changeBackground() {
    currentIndex = (currentIndex + 1) % screenshots.length;

    heroLogoElement.style.setProperty('--bg-image',`url('${screenshots[currentIndex]}')`);
};

function preloadImage(urls) {
    urls.forEach(url => {
        const pImg = new Image();
        pImg.src = url;
    });
}

preloadImage(screenshots)
setInterval(changeBackground,5000)
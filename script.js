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
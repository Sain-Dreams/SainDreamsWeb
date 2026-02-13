const screenshots = [
    '/assets/images/mindwave/1.webp',
    '/assets/images/lavaris/bg.webp',
    '/assets/images/mindwave/2.webp',
    '/assets/images/lavaris/bg.webp',
    '/assets/images/mindwave/3.webp',
    '/assets/images/lavaris/bg.webp',
    '/assets/images/mindwave/4.webp',
    '/assets/images/lavaris/bg.webp'
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
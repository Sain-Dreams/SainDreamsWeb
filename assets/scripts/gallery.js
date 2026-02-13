const photos = [
    "/assets/images/mindwave/1.webp",
    "/assets/images/mindwave/2.webp",
    "/assets/images/mindwave/3.webp",
    "/assets/images/mindwave/4.webp"
]

function change_main_photo(index) {
    const main_img = document.querySelector(".main_photo")

    if (main_img) {
        main_img.src = photos[index]
    }
}
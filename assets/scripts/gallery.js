/*
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
*/

const gallery = document.querySelector(".more_photos")
const gallery_btn = gallery.querySelectorAll("a")

const main_img = document.querySelector(".main_photo")
const first_photo = gallery_btn[0].querySelector("img")

function change_main_photo(event) {
    event.preventDefault();

    const img = event.currentTarget.querySelector("img")
    main_img.src = img.src

    gallery_btn.forEach((btn) => btn.querySelector("img").classList.remove("active"))
    img.classList.add("active")
}

first_photo.classList.add("active")

gallery_btn.forEach((btn) => {
    btn.addEventListener("click", change_main_photo)
}
)

// function to show image when we click on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}

// to handle page image loading logic:
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-img");
    let loadedImagesCount = 0;

    images.forEach((image) => {
        image.addEventListener("load", () => {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
                allImagesLoaded();
            }
        });

        // Handle cases where an image is already cached and loaded
        if (image.complete) {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
                allImagesLoaded();
            }
        }
    });
});

function allImagesLoaded() {
    document.body.classList.add("gallery-loaded"); // Show gallery
    document.body.classList.add("preloader-hidden"); // Hide preloader
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-mediator-btn');
    const mediatorImage = document.getElementById('mediator-image');
    const gridImages = Array.from(document.querySelectorAll('.image-grid .grid-item img'));
    const floatingImagesContainer = document.querySelector('.floating-images');

    button.addEventListener('click', () => {
        // Get a random index from the grid images array
        const randomIndex = Math.floor(Math.random() * gridImages.length);
        const randomImageSrc = gridImages[randomIndex].src;

        // Swap the mediator image source with the random image
        mediatorImage.src = randomImageSrc;
    });

    function createFloatingImages() {
        gridImages.forEach(image => {
            const floatingImg = document.createElement('img');
            floatingImg.src = image.src;
            floatingImg.style.top = `${Math.random() * 100}vh`; // Random vertical position
            floatingImg.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            floatingImg.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration
            floatingImagesContainer.appendChild(floatingImg);
        });
    }

    createFloatingImages();
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    // Function to preload all images
    const preloadImages = () => {
        images.forEach((image, index) => {
            const img = new Image();
            img.onload = () => {
                image.src = img.src; // Ensures image is loaded into cache
                image.style.display = 'none'; // Initially hide images
                if (index === 0) {
                    image.style.display = 'block'; // Show the first image
                }
            };
            img.src = image.src;
        });
    };

    // Preload images before setting up navigation
    preloadImages();

    // Function to show the current image
    const showImage = () => {
        images.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    };

    // Next button click event
    nextBtn.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        showImage();
    });

    // Previous button click event
    prevBtn.addEventListener('click', () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        showImage();
    });
});

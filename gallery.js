document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

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

    // Show initial image
    showImage();

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

var glide01 = new Glide('.glide-01', {
    type: 'slider',
    focusAt: 'center',
    perView: 1,
    autoplay: 3000,
    animationDuration: 700,
    gap: 0,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },

});

glide01.mount();



// goto top button code


document.getElementById("gotoTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const scrollToTopButton = 
      document.getElementById('scroll-to-top');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}  

function previewImage(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imgElement = document.getElementById('preview');
    const imgContainer = document.querySelector('.image-show');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imgElement.src = e.target.result;
            imgContainer.style.display = 'block'; // Show the image container
        }

        reader.readAsDataURL(file);
    } else {
        imgElement.src = ''; // Clear the image source if no file is selected
        imgContainer.style.display = 'none'; // Hide the image container
    }
}

function previewDocument(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const iframe = document.getElementById('documentPreview');
    const resumeContainer = document.querySelector('.resume-show');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const blob = new Blob([e.target.result], { type: file.type });
            const objectUrl = URL.createObjectURL(blob);

            iframe.src = objectUrl;
            resumeContainer.style.display = 'block'; // Show the iframe container
        }

        reader.readAsArrayBuffer(file);
    } else {
        iframe.src = ''; // Clear the iframe source if no file is selected
        resumeContainer.style.display = 'none'; // Hide the iframe container
    }
}


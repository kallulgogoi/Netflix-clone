

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const currentlyActive = document.querySelector('.faq-item.active');
        
        // Close currently open item if clicking on a different one
        if (currentlyActive && currentlyActive !== faqItem) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.toggle-icon').textContent = '+';
        }
        
        // Toggle current item
        faqItem.classList.toggle('active');
        const icon = question.querySelector('.toggle-icon');
        icon.textContent = faqItem.classList.contains('active') ? '×' : '+';
    });
});

// Initialize carousel arrows
document.querySelector(".left-arrow").classList.add("hidden");

// Right arrow click
document.querySelector(".right-arrow").addEventListener("click", function() {
    const carousel = document.querySelector(".inner-trending-carousel");
    carousel.style.transform = "translateX(-50%)";
    document.querySelector(".right-arrow").classList.add("hidden");
    document.querySelector(".left-arrow").classList.remove("hidden");
});

// Left arrow click
document.querySelector(".left-arrow").addEventListener("click", function() {
    const carousel = document.querySelector(".inner-trending-carousel");
    carousel.style.transform = "translateX(0%)";
    document.querySelector(".left-arrow").classList.add("hidden");
    document.querySelector(".right-arrow").classList.remove("hidden");
});

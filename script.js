

document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.product-card, .testimonial-card');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    };
    
    const hideScrollElement = (element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.2)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initial setup
    scrollElements.forEach(el => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        hideScrollElement(el);
    });
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
});




function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}





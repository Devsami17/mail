document.querySelectorAll('.accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item'); 
        const icon = button.querySelector('i');
        const content = accordionItem.querySelector('.accordion-content');

        icon.classList.toggle('active');
        content.classList.toggle('active');
    });
});
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".respo-header").classList.toggle("active");
});

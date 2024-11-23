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

const toggle = document.getElementById("toggle");
const leftText = document.querySelector(".text-left");
const rightText = document.querySelector(".text-right");

toggle.addEventListener("change", function() {
    if (toggle.checked) {
        leftText.style.color = "#b3b3b3";  
        rightText.style.color = "#000";   
    } else {
        leftText.style.color = "#000";    
        rightText.style.color = "#b3b3b3"; 
    }
});





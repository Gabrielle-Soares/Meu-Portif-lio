document.addEventListener('DOMContentLoaded', function() {
    
    const roles = ["UX Designer", "Desenvolvedora Front-End", "Analista de Sistemas"];
    let roleIndex = 0;
    const typingElement = document.querySelector('.typing');
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenRoles = 1500;

    function type() {
        const currentText = roles[roleIndex];
        let charIndex = 0;

        function typingStep() {
            if (charIndex < currentText.length) {
                typingElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typingStep, typeSpeed);
            } else {
                setTimeout(erase, delayBetweenRoles);
            }
        }
        typingStep();
    }

    function erase() {
        const currentText = roles[roleIndex];
        let charIndex = currentText.length;

        function erasingStep() {
            if (charIndex > 0) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erasingStep, deleteSpeed);
            } else {
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 500); 
            }
        }
        erasingStep();
    }

    if (typingElement) {
        type();
    }


   
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
        
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.onclick = () => {
                if (window.innerWidth <= 768) {
                    navbar.classList.remove('active');
                }
            };
        });
    }
});
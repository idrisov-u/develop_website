document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.');
    this.reset(); // Clear the form fields
});

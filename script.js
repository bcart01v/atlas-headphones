document.getElementById('hamburgerMenu').addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    const nav = document.getElementById('navigationMenu');
    nav.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    const nav = document.getElementById('navigationMenu');
    const isClickInside = nav.contains(event.target) || event.target === document.getElementById('hamburgerMenu');
    if (!isClickInside) {
        nav.classList.remove('active');
    }
});
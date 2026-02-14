const toggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;
const aboutElement = document.about;

toggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    aboutElement.classList.toggle('dark-mode')
});

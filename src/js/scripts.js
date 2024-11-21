const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const downloadBtn = document.getElementById('download-cv');

menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('visible');
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
});

function toggleTheme() {
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', toggleTheme);

downloadBtn.addEventListener('click', () => {
    const cvLink = '../assest/Jhojander-CV.pdf';
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = '../assest/Jhojander-CV.pdf';
    link.click();
});

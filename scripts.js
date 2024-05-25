// Define the toggleSection function
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.section-content');
    const isOpen = content.style.maxHeight;

    if (isOpen) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Fade in the main title and add secondary text after 3 seconds
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.getElementById('main-title');
    mainTitle.style.opacity = '0';
    mainTitle.style.transition = 'opacity 1.5s';
    mainTitle.style.opacity = '1';

    setTimeout(() => {
        const subtext = document.getElementById('subtext');
        subtext.classList.remove('hidden');
        subtext.style.opacity = '0';
        subtext.style.transition = 'opacity 1.5s';
        subtext.style.opacity = '1';
    }, 3000);
});

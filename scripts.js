// Define the toggleSection function
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const content = section.querySelector('.section-content');
        const notch = section.querySelector('.section-notch');
        if (section.id === sectionId) {
            const isOpen = section.classList.contains('section-open');
            if (isOpen) {
                content.style.maxHeight = null;
                section.classList.remove('section-open');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                section.classList.add('section-open');
            }
        } else {
            content.style.maxHeight = null;
            section.classList.remove('section-open');
        }
    });
}

// Fade in the main title and add secondary text after 3 seconds
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.getElementById('main-title');
    mainTitle.style.opacity = '0';
    mainTitle.style.transition = 'opacity 1.5s, transform 1.5s';
    mainTitle.style.opacity = '1';
    mainTitle.style.transform = 'translateY(0)';

    setTimeout(() => {
        const subtext = document.getElementById('subtext');
        subtext.classList.remove('hidden');
        subtext.style.opacity = '0';
        subtext.style.transition = 'opacity 1.5s, transform 1.5s';
        subtext.style.opacity = '1';
        subtext.style.transform = 'translateY(0)';
    }, 3000);
});

// Toggle dark and light mode
document.getElementById('theme-toggle').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-mode', event.target.checked);
});

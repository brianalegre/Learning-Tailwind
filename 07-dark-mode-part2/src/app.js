// Targeting Elements
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Get user settings
const useTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

// Toggle Light and Dark Mode
const iconToggle = () => {
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
}


const themeCheck = () => {
    if (useTheme === 'dark' || (!useTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('display-none');
        return;
    }
    sunIcon.classList.add('display-none');
}

// Switching themes
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        // Save settings to localStorage
        localStorage.setItem('theme', 'light')
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    // Save settings to localStorage
    localStorage.setItem('theme', 'dark')
    iconToggle();
}

// Listen for click event
sunIcon.addEventListener('click', () => {
    themeSwitch();
})

moonIcon.addEventListener('click', () => {
    themeSwitch();
})

// Check theme on load
themeCheck();
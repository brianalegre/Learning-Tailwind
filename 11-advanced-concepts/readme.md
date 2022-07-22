## Tailwind Functions

## Summary
- This goes over the theme() and screen() tailwind functions

## Installation
- Updated tailwind.config.js
    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/*.html"
    ],
    // For Dark Mode - Enabled in Windows
    darkMode: "media", //class, media
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```

- Added to tailwind.css
    ```
    .display-none {
    @apply hidden;
    }
    ```
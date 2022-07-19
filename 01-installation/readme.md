## Tailwindcss Installation and Setup

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents 📑
- [Description](#description)
- [Installation](#installation)
- [Links](#links)
- [Technologies](#technologies)
- [Questions](#questions)
- [License](#license)

## Description
Guide on how to setup tailwindcss CLI at the beginning of a project

- NOTE: Extentions to install (not in the guide)
    - Tailwindcss Intellisense
    - PostCSS Language Support


## Installation
- npm init -y
    - package.json created
- npm install -D tailwindcss
    - package-lock.json created
- npx tailwindcss init
    - tailwind.config.js created
- Create folders at root of project
    - output
    - src
    - images
    - .vscode
- In the 'src' folder, create a css file
    - tailwind.css

- In the 'tailwind.css' file paste the code below into the file
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- In the '.vscode' folder, create a file named
    - settings.json

- In the 'settings.json file, paste the code below into the file:
    ```
    {
        "css.validate": false,
        "tailwindCSS.emmetCompletions": true,
    }
    ```

 - In the ‘package.json’ file, edit the scripts section 
    - FROM: 
    ``` 
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
    - TO:
    ```
    "scripts": {
        "build": "tailwindcss -i ./src/tailwind.css -o ../output/tailwind.css --watch"
    },
    ```
    - This will update the ‘.output/tailwind.css’ file with the css styling


- Create a 'index.html' file in the 'src' folder
- In the 'index.html' file use the emmet shortcut for !
- Link css file
    ```
        <link rel="stylesheet" href="../output/tailwind.css">
    ```

- Run ‘npm run build’
    - 'tailwind.css' created in the 'output' folder

- In the tailwind.config.js replace the code with:
    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```


## Links
-   Github Repository:
    - https://github.com/brianalegre/Learning-Tailwind

## Technologies
- tailwindcss
    - https://tailwindcss.com/

## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: brianalegre
- Github Link: https://github.com/brianalegre 
- Email: brialegre@yahoo.com

## License
- Copyright 2022 Brian Alegre
- Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 


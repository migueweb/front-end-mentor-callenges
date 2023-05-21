import links from './js/links.js'

const readmeTemplate = (links) => {
    return `
# Frontend mentor callenges solved

Hi 👋 this repo is my collection of Frontend mentor challenges solved. Using HTML, CSS, SCSS, Bootstrap, Tailwind css, JavaScript and other frontend technologies.

Site: [migueweb.github.io/frontend-mentor-challenges/](https://migueweb.github.io/frontend-mentor-challenges/)

## Challenges solved

${links}

## Author
github: [@migueweb](https://github.com/migueweb)
`
}

const linkTemplate = (title, url) => {
    const baseUrl = 'https://github.com/migueweb/'
    return `- [${title}](${baseUrl + url})`
}

let linksString = '';

links.forEach(link => {
    link.url = link.title.toLowerCase().replace(/ /g, '-');
    linksString += linkTemplate(link.title, link.url) + '\n';
});

console.log(readmeTemplate(linksString))
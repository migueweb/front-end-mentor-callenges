import links from './links.js';

const linksHTML = document.querySelector('#links');


const linkTemplate = (title, url) => {
    const baseUrl = 'https://migueweb.github.io/'
    return `
        <a href="${baseUrl + url}" class="main-container-link" target="_blank">${title}</a>
    `
}

let linksString = '';

links.forEach(link => {
    link.url = link.title.toLowerCase().replace(/ /g, '-');
    linksString += linkTemplate(link.title, link.url);
});

linksHTML.innerHTML = linksString;
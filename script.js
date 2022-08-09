// select the html element
const container = document.querySelector('#container');

// create div and add text
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
// make div appear on page
container.appendChild(content);

// create paragraph inside div container
const paragraph = document.createElement('p');
paragraph.classList.add('words');
paragraph.textContent = 'Hey I\'m red!';
container.appendChild(paragraph);

// select and style paragraph
let pStyle = document.querySelector('p').style;
pStyle.color = 'red';

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = 'I\'m a blue h3!';
// header3.setAttribute('style', 'color: blue');
container.appendChild(header3);

// setAttribute seems to be a better way to do this:
// maybe use below for when lots of style need changed?
let h3Style = document.querySelector('.header3').style;
h3Style.color = 'purple';

const divBox = document.createElement('div');
divBox.classList.add('box');

const divH1 = document.createElement('h1');
divH1.textContent = 'I\'m in a div';
divBox.appendChild(divH1);

const divP = document.createElement('p');
divP.textContent = 'ME TOO!';
divBox.appendChild(divP);

divBox.setAttribute('style', 'border: solid; background: pink');

container.appendChild(divBox);

// let divBoxStyle = document.querySelector('.box').style;
// divBoxStyle.borderStyle = 'solid';
// divBoxStyle.backgroundColor = 'pink';
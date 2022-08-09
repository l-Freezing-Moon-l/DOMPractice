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
h3Style.color = 'blue';

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

// practice even listener
btn.addEventListener('click', function (e) {
  console.log(e);
});

// practice callback function
function myMap(array, callback) {
  const myNewArray = [];

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    myNewArray.push(callbackResult); 
  }

  return myNewArray;
}


// This could be called like this:
// const addedArray = myMap([1, 2, 3], (arrayNum) => {
//   return arrayNum + 2; 
// });
// OR
const addedArray = myMap([1, 2, 3], (arrayNum) => arrayNum + 2)
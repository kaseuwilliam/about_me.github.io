// selecting element by id
let skills = document.getElementById('skills')

// selecting element by class - returns back an array
let paragraph2 = document.getElementsByClassName('p2')

// selecting element by tagname - returns back an array
let h2 = document.getElementsByTagName('h2')

// selecting element using query selector
let h1 = document.querySelector('h1')

// selecting element using query selector all - returns an array
let h2V2 = document.querySelectorAll('h2')
// get second h2
// console.log(h2V2[1])

skills.style.color = 'green'

// creating a new li element and adding it to the ul
let ul = document.querySelectorAll('ul')
let placesLived = ul[1]

let listedItem = document.createElement('li')
listedItem.innerText = 'Philadelphia, PA'

placesLived.append(listedItem);


// change the contents in paragraph 1
// let paragraph1 = document.querySelector('p')
let paragraph1 = document.querySelectorAll('p')[0]
paragraph1.innerText = 'Hello, my name is William Kaseu and I am 28 years old'


// change the contents in paragraph 2
let p2 = document.querySelector('.p2')


// get the element for the button
let button2 = document.querySelector('#btn2')

// use event listener to make the button do something when it gets clicked
button2.addEventListener('click', alertButton)

function alertButton(){

    alert('Hey, Button 2 has been clicked');

    // console.log("Hey, I have been clicked");
}

// get the element for the button
let button3 = document.querySelector('#btn3')

// use event listener to make the button do something when it gets hovered over
button3.addEventListener('mouseover', hoverAlert)

function hoverAlert(){
    alert('Hey, Button 3 has been clicked');
}

// get the elements for the buttons
let addButton = document.querySelector('#btn4')
let decreaseButton = document.querySelector('#btn5')
let resetButton = document.querySelector('#btn6')

// get the element for the counter
let count = 0;
let counter = document.querySelector('#counter')
counter.innerText = count


// use event listener to make the buttons add/decrease/reset the counter
addButton.addEventListener('click', add)
decreaseButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)

function add(){
    count = count + 1
    counter.innerText = count
}

function decrease(){

    if (count > 0){
        count = count - 1;
        counter.innerText = count
    }
}

function reset(){
    count = 0;
    counter.innerText = count
}

// get the elements for the button and input
let input = document.querySelector('#name')
let button = document.querySelector('#greet')
let personName = 'Gina';

// use event listener to make the buttons do something
button.addEventListener('click', greet)

// use event listener to the personName with the input value
input.addEventListener('change', changePersonName)


function changePersonName(event){
    personName = event.target.value
}

function greet(){
    alert(`Hello, ${personName}`)
}



console.log(10 % 3)


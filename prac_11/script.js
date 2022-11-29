'use strict'

//task #1
let array = [];

const containerArray = document.querySelector(".container__array");
const addButton = document.querySelector(".add__button");
const shiftButton = document.querySelector(".shift__button");
const replaceButton = document.querySelector(".replace__button");

var count = array.length;

addButton.addEventListener("click", event => {
    let block = document.createElement("div");
    block.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title", "title_h2");
    title.innerHTML = "Element " + count;
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
    count++;
});

shiftButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    array.shift();
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    let index = Math.floor(Math.random() * array.length);
    let el = Math.floor(Math.random() * array.length);
    let tmp = array[index];
    array[index] = array[el];
    array[el] = tmp;
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

//task #2
const task3Button = document.querySelector(".task2_button");
task3Button.addEventListener("click", event => {
    let array2 = [];
    for (let i = 0; i < 10; i++) 
        array2.push(Math.floor(Math.random()*10));
    alert("Array: " + array2);
    let ab = prompt("Введите a и b через пробел");
    ab = ab.split(' ');
    let a = parseInt(ab[0], 10);
    let b = parseInt(ab[1], 10);
    let newArray = array2.filter(item => (item >= a && item <= b));

    alert("Old array: " + array2 + "\nNew array: " + newArray);
});

//task #3
const sortButton = document.querySelector(".sort__button");
const sortTypeButton = document.querySelector(".sort__button2");
const shuffleButton = document.querySelector(".sort__button3");
var reverse = false;
let list = document.querySelectorAll(".array3");
let array3 = new Array();
for(let el of list){
    array3.push(Number(el.innerHTML));
}
function compare(a, b){
    return Number(a) - Number(b);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
sortButton.addEventListener("click", event => {
    array3.sort(compare);
    if (reverse) array3.reverse();
    for(let i = 0; i < array3.length; i++){
        list[i].innerHTML = array3[i];
    }
});
sortTypeButton.addEventListener("click", event =>{
    if (!reverse){
        sortTypeButton.innerHTML = "По убыванию";
        reverse = true;
    } else {
        sortTypeButton.innerHTML = "По возрастанию";
        reverse = false;
    }
});
shuffleButton.addEventListener("click", event =>{
    shuffleArray(array3);
    for(let i = 0; i < array3.length; i++){
        list[i].innerHTML = array3[i];
    }
});

//task #4-5
const notification = document.querySelector(".img__notification");
const listNotification = document.querySelector(".text__notification");
let counter = document.querySelector(".counter");

function counterN(){
    counter.style.opacity = 1;
    counter.innerHTML++;
    let el = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = "Уведомление";
    a.setAttribute("class", "bell__item");
    el.append(a);
    listNotification.append(el);
}

let timer = setTimeout(
    function tick(){
        counterN();
        timer = setTimeout(tick, 3000);
    }, 3000);

notification.addEventListener("click", event => {
    if(listNotification.classList.contains("active")){
        clearTimeout(timer);
        listNotification.classList.remove("active");
        while(listNotification.lastElementChild){
            listNotification.removeChild(listNotification.lastElementChild);
        }
        counter.innerHTML = 0;
        counter.style.opacity = 0;
        timer = setTimeout(
            function tick(){
                counterN();
                timer = setTimeout(tick, 3000);
            }, 10000);
    }
    else{
        listNotification.classList.add("active");
    }
});
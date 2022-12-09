'use strict'

// Task #1

contents.onclick = function(event) {
    function handler(href) {
        if (!confirm(`Перейти на сторонний ресурс ${href}?`)) return false;
    }
    if (event.target?.closest("a")){
        return handler(event.target.getAttribute("href"));
    }
}

//Task #2

gallery_smalls.onclick = function(event) {
    let newPic = event.target.closest("img");
    if (!newPic) return;
    else mainPic.src = newPic.src;
}

//Task #3

list.onclick = function(event){
    console.log("test");
    if(event.target.tagName != 'LI')return;
    if(event.ctrlKey){
        event.target.classList.toggle('selected');
    }
    else{
        let selected = list.querySelectorAll('.selected');
        for(let el of selected) el.classList.remove('selected');
        event.target.classList.add('selected');
    }
}

//Task #4

let slider = document.querySelector(".slider");
let slider_thumb = document.querySelector(".slider__thumb");

slider_thumb.onmousedown = function(event){
    event.preventDefault();//запрет дефолтного выделения

    let shifting = event.clientX - slider_thumb.getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shifting - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - slider_thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        slider_thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
}
slider_thumb.ondragstart = function () { //отмена браузерного ondragstart
    return false;
};


//Task #5
const counter = document.querySelector("#counter");
var cost = 0;
function DragAndDrop(elem) {
    elem.preventDefault();
}

function drag(elem) {
    elem.dataTransfer.setData("text", elem.target.id);
}

function drop(elem) {
    elem.preventDefault();
    var data = elem.dataTransfer.getData("text"); //получает данные для перетаскивания
    elem.target.appendChild(document.getElementById(data)); //добавляет перетасканное
    cost+=10;
    counter.innerHTML = "Cost: " + cost;
}

//Task 6
//animation 1
logoImg.onclick = function(){
    let start = Date.now();
    console.log("111");
    logoImg.style.transform = "rotate(45deg)";
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        if(logoImg.offsetLeft<header.offsetWidth) logoImg.style.left = timePassed / 5 + 'px';

        if (timePassed > 8000) clearInterval(timer);

    }, 1);
}
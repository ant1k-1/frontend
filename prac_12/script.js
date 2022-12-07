'use strict'

// Task #1

const changer = document.querySelector(".links.changer");

changer.addEventListener("click", e =>{
    let links = document.querySelectorAll('.links');
    for(let link of links){
        if(!link.getAttribute("href")) continue;
        link.style.color = "red";
    }
});

// Task #2

const creater = document.querySelector(".links.task2");
const create_list = document.querySelector(".created-list");

creater.addEventListener("click", e => {
    console.log("check");
    while(true){
        let text = prompt("Введите li: ");
        if (text == null || text.length == 0 || text==false) return;
        else{
            text = text.replaceAll('<', "&lt");
            text = text.replaceAll('>', "&gt");
            console.log(text);
            let el = document.createElement("li");
            el.innerHTML = text;
            create_list.append(el);
        }
    }
});

// Task #3
const send_notify = document.querySelector(".links.task3");
const basket = document.querySelector(".text__basket");


function showNotification(options, flag){
    let notify = document.createElement("div");
    notify.classList.add("notification");
    notify.textContent = options;
    console.log("qqq");
    if(flag == true){ 
        basket.append(notify);
        setTimeout(()=>{
            notify.remove();
        }, 1500);
    }
    else{
        let btn = document.createElement("button");
        btn.textContent = "X";
        btn.classList.add("links");
        btn.classList.add("task51");
        notify.append(btn);
        basket.append(notify);
        btn.addEventListener('click', e=>{
            notify.remove();
        });
    }
}

send_notify.addEventListener("click", e =>{
    console.log("check3");
    showNotification("Уведомление", true);

});

// Task #5

const send_notify2 = document.querySelector(".links.task5");
send_notify2.addEventListener("click", e =>{
    console.log("check5");
    showNotification("Уведомление", false);
});

// Task #4

const img = document.querySelector(".task4img");
const border = document.querySelector(".container.task4");

img.addEventListener('click', e =>{
    img.style.margin = "auto 0";
    img.style.width = border.clientWidth/2  + "px";
    img.style.height = border.clientHeight/2  + "px";
    img.style.position = "relative";
});

const coords = document.querySelector(".coording");

img.addEventListener("click", e=>{
    coords.textContent = "X="+e.pageX +", Y="+ e.pageY;
});

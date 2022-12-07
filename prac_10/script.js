'use strict'

//Task #1

const textCapture = document.querySelector(".text");
const checkButton = document.querySelector(".check__button");
const disabledButton = document.querySelector(".disabled__button");
const answer = document.querySelector(".text__capture");

var count = true;

function first_check(){
    count = false;
    if (answer.value == textCapture.innerHTML){
        disabledButton.disabled = false;
        checkButton.disabled = true;
    } else captcha();
}

function captcha(){
    if(count){
        const letters = "abcdefghijklmnopqrstuvwxyz";
        while(textCapture.innerHTML.length < 5){
            textCapture.innerHTML += letters[Math.floor(Math.random() * letters.length)];
        }
        checkButton.addEventListener("click", first_check);
    } else {
        let n1 = Math.floor(Math.random() * 10);
        let n2 = Math.floor(Math.random() * 10);
        textCapture.innerHTML = n1 + " + " + n2;
        checkButton.removeEventListener("click", first_check);
        checkButton.addEventListener("click", event => {
            if(Number(answer.value) === n1+n2){
                disabledButton.disabled = false;
                checkButton.disabled = true;
                disabledButton.addEventListener("click", event => {
                    disabledButton.disabled = true;
                })
            } else captcha();
        });
    }
}
captcha();

//Task #2

function Accumulator(startingValue = 0){
    this.value = startingValue,
    this.read = function(){
        let sum = Number(prompt("Введите сумму: "));
        if (isNaN(sum))     alert("Допускаются только числа!")
        else this.value += sum;
        alert("Вы пожертвовали " + sum + " миска-рис");
    }
}

const list = document.querySelector(".text__basket");
const donationButton = document.querySelector(".donation__button");
const basketButton = document.querySelector(".img__basket");

let basket = new Accumulator(0);

donationButton.addEventListener("click", event => {
    basket.read();
})

basketButton.addEventListener("click", event => {
    if (basketButton.classList.contains("active")){
        basketButton.classList.remove("active");
        while (list.lastElementChild) {
            list.removeChild(list.lastElementChild);
        }
    }else{
        basketButton.classList.add("active");
        let text = document.createElement("li");
        text.innerHTML = "Сумма: " + basket["value"];
        list.append(text);
    }
});

// Task #3
const descriptions = document.querySelectorAll(".decription");
for(let el of descriptions){
    el.innerHTML = truncate(el.innerHTML, 200);
}
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}
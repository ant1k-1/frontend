let login_button = document.querySelector(".login_button");
login_button.addEventListener("click", () => {
	while (true) {
        let enter = confirm("Желаете пройти регистрацию на сайте?");
        if (enter){
            alert("Круто!");
            break;
        }
		else alert("Попробуй ещё раз")
	}
	
})

let login_button2 = document.querySelector('.login_button2')

login_button2.addEventListener("click", () => {
    while(true){
        let login = prompt("Введите логин")
        if (login == null) {
            alert("Отменено"); 
            break;
        } else if (login === "Админ") {
            let password = prompt("Введите пароль")
            if (password === "Я главный") {
                alert("Здравствуйте!")
                break;
            } else {
                alert("Неверный пароль")
            }
        } else {
            alert("Я вас не знаю")
        }
    }
});

let button = document.querySelector(".like_button");
button.addEventListener("click", event => {
    if(button.style.backgroundColor === "pink"){
        button.style.backgroundColor = "gray";
        button.style.color = "aliceblue";
        button.innerHTML = "Like!";
    } else{
        button.style.backgroundColor = "pink";
        button.style.color = "red";
    }
});

let btn = document.querySelector('.draw_button');
let body = document.querySelector('.draw');
let drawing = true;
btn.addEventListener("click", ()=> {
    if (drawing){
        body.addEventListener("mousemove", drawHeartOnPos);
        drawing = false;
    }
    else{
        body.removeEventListener("mousemove", drawHeartOnPos);
        drawing = true;
    }
})

function drawHeartOnPos(event) {
    var draw = document.createElement('a')
    draw.className = 'draw_button';
    draw.style.position = "absolute";
    draw.innerHTML = "Draw!";
    draw.style.top = (event.pageY - 10) + "px";
    draw.style.left = (event.pageX + 10) + "px";
    document.body.append(draw);
    setTimeout(function () {
        document.body.removeChild(draw);
    }, 500);
}
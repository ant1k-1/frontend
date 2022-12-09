//task 1
contents.onclick = function (event) {
    function handleLink(href) {
        let isLeaving = confirm(`Перейти на ${href}?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a');
    console.log(target);
    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
    }
};


//task 2
thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();
}
function showThumbnail(href) {
    largeImg.src = href;
}


//task 3
ul.onclick = function (event) {
    if (event.target.tagName != "LI") return;
    if (event.ctrlKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }
}

ul.onmousedown = function () {
    return false;
};

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}


//task 4
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};

thumb.ondragstart = function () {
    return false;
};


//task 5
function allowDragAndDrop(elem) {
    elem.preventDefault();
}
function drag(elem) {
    elem.dataTransfer.setData("text", elem.target.id);
}
function drop(elem) {
    elem.preventDefault();

    var data = elem.dataTransfer.getData("text");
    var box = document.querySelector("#myFigure");
    var all_cost = Number(box.getAttribute('all_cost'));

    elem.target.appendChild(document.getElementById(data));

    for (let elem of box.children) {
        all_cost += Number(elem.getAttribute('cost'));
    }

    console.log(all_cost);
}


const animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left:rect.left + scrollLeft}
    }
    setTimeout(() =>{
        animOnScroll();
    }, 300);

}
let slideNumber = document.querySelector(".slide-number");
let imgs = document.querySelectorAll("img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let ul = document.querySelector(".indicators");
let numOfImgs = imgs.length;
let counter = 1;
if (window.localStorage.getItem("counter")) 
    counter = window.localStorage.getItem("counter"); 
// Start Functions
function refreshImgs() {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[counter - 1].classList.add("active");
}
refreshImgs();
function numOfSlides() {
    slideNumber.innerHTML = `Slide ${counter} of ${numOfImgs}`;
    window.localStorage.setItem("counter", counter);
}
numOfSlides();
function num_of_li() {
    for (let i = 0; i < numOfImgs; i++) {
        let li = document.createElement("li");
        li.textContent = i + 1;
        ul.appendChild(li);
    }
}
num_of_li();
let lis = document.querySelectorAll("li");
lis[counter - 1].classList.add("active");
lis.forEach(li => {
    li.onclick =  function ()  {
        lis.forEach( (li) => li.classList.remove("active"))
        this.classList.add("active");
        counter = +this.innerHTML
        refreshImgs();
        numOfSlides();
        check();
    }
})
function check() {
    counter  == numOfImgs ? next.classList.add("disabled"):next.classList.remove("disabled");
    counter  == 1 ? prev.classList.add("disabled"):prev.classList.remove("disabled");
}
check();
next.onclick =  () =>  {
    if (counter == numOfImgs) {
        return false;
    } else {
        lis[counter - 1].classList.remove("active");
        counter++;
        lis[counter - 1].classList.add("active");
        refreshImgs();
        numOfSlides();
        check();
    }
}
prev.onclick =  () => {
    if (counter == 1) {
        return false;
    } else {
        lis[counter - 1].classList.remove("active");
        counter--;
        lis[counter - 1].classList.add("active");
        refreshImgs();
        numOfSlides();
        check();
    }
}
// End Functions
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const black = document.querySelector(".black");

const container = document.querySelector(".container");

const button = document.querySelector(".button");


const getColor = (selectColor)=> {
    return window.getComputedStyle(selectColor).backgroundColor;
};



const colorSelector = (element,pickColor) => {
    return element.addEventListener("click",()=>{
        container.style.background = pickColor;
    })
};


colorSelector(yellow,getColor(yellow));
colorSelector(blue,getColor(blue));
colorSelector(red,getColor(red));
colorSelector(green,getColor(green));
colorSelector(black,getColor(black));


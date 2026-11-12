//Task 1;
const btn = document.querySelector("#btn1")
btn.addEventListener("click",function(){
    alert("Button Clicked Successfully !");
})

//Task 2;
const p = document.querySelector("#para");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",function(){
    p.textContent = "Text Updated Successfully !";
})

//Task 3;
const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click",function(){
document.body.style.backgroundColor = "yellow";
})

//Task 4;
const input = document.querySelector("#input");
const output  = document.querySelector("#output");
input.addEventListener("input",function(){
output.textContent = input.value;
})

// Task 5;
const mouse = document.querySelector("#mouse");
mouse.addEventListener("mouseenter",function(){
    mouse.style.backgroundColor = "blue";
})
mouse.addEventListener("mouseleave",function(){
    mouse.style.backgroundColor = "white";
})

// Task 6;
const bten = document.querySelector("#btn4");
bten.addEventListener("dblclick",function(){
    alert("Double Clicked Detected !");
})
let countel = document.getElementById("countel") //pass in argument
let pre1 = document.getElementById("pre1")
let count = 0;

console.log(pre1)

function increment(){
    count += 1;
    countel.textContent = count
}

/** 1. create function, save(), logs out count when called */

function save(){

    let countstr = count + "-"
    pre1.textContent += countstr
    countel.textContent = 0
    count = 0
}


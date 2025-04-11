document.getElementById("act-p1").style.display="none";
document.getElementById("act-p2").style.display="none";
document.getElementById("act-p3").style.display="none";
document.getElementById("act-p4").style.display="none";
document.getElementById("act-p5").style.display="none";
document.getElementById("act-p6").style.display="none";


document.getElementById("fix-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;

let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;
this.disabled = true;
document.getElementById("act-p1").style.display="block";
alert("Board updated Successfully");
if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
})

document.getElementById("add-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;


let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;

// this.disabled = true;  Button disable hoye jabe

this.disabled = true;
document.getElementById("act-p2").style.display="block";
alert("Board updated Successfully");
if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
})

document.getElementById("opt-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;


let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;
this.disabled = true;
document.getElementById("act-p3").style.display="block";
alert("Board updated Successfully");
if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
})

document.getElementById("emo-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;


let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;
this.disabled = true;
document.getElementById("act-p4").style.display="block";
alert("Board updated Successfully");
if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
})

document.getElementById("int-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;


let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;
this.disabled = true;
document.getElementById("act-p5").style.display="block";
alert("Board updated Successfully");
if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
})

document.getElementById("impr-btn").addEventListener("click",
    function(){
let num = document.getElementById("minus").innerText
let convertedNum = parseInt(num)
let finalNum = convertedNum - 1 ;
document.getElementById("minus").innerText= finalNum;


let num2 =document.getElementById("plus").innerText
let convertedNum2 = parseInt(num2)
let finalNum2 = convertedNum2 + 1;
document.getElementById("plus").innerText= finalNum2;
this.disabled = true;
document.getElementById("act-p6").style.display="block";
alert("Board updated Successfully");

if(convertedNum === 1){
    alert("Congrats!!! you have completed all the task ");

}
// alert("Congrats!!! you have completed all the task ");
})

document.getElementById("clr-btn").addEventListener("click", function(){
    document.getElementById("act-p1").style.display="none";
    document.getElementById("act-p2").style.display="none";
    document.getElementById("act-p3").style.display="none";
    document.getElementById("act-p4").style.display="none";
    document.getElementById("act-p5").style.display="none";
    document.getElementById("act-p6").style.display="none";

})


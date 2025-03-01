
document.getElementById("bg-click").addEventListener("click",
    function(){
let colorCode = Math.random()*100000000;

let  colorCode1 = parseInt(colorCode) ;
let colorCode2 = colorCode1.toString(16) ;
let colorCode3 = colorCode2.slice(1,7);
let colorCode4 = '#'+ colorCode3 ;
console.log(colorCode4);
document.getElementById("body-bg").style.backgroundColor= colorCode4 ;    
})
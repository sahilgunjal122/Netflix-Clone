const istrue=false;
const icText1=document.querySelector("#icons1");
const icText2=document.querySelector("#icons2");
const icText3=document.querySelector("#icons3");
const icText4=document.querySelector("#icons4");
const icText5=document.querySelector("#icons5");
const icText6=document.querySelector("#icons6");
const contentEl1=document.querySelector(".content1");
const contentEl2=document.querySelector(".content2");
const contentEl3=document.querySelector(".content3");
const contentEl4=document.querySelector(".content4");
const contentEl5=document.querySelector(".content5");
const contentEl6=document.querySelector(".content6");


function ToggleEventfunction1(){
    contentEl1.classList.toggle("hide");
    
}
function ToggleEventfunction2(){
    contentEl2.classList.toggle("hide");

}
function ToggleEventfunction3(){
    contentEl3.classList.toggle("hide");

}
function ToggleEventfunction4(){
    contentEl4.classList.toggle("hide");

}
function ToggleEventfunction5(){
    contentEl5.classList.toggle("hide");
    
}
function ToggleEventfunction6(){
    contentEl5.classList.toggle("hide");
    
}

icText1.addEventListener("click",ToggleEventfunction1);
icText2.addEventListener("click",ToggleEventfunction2);
icText3.addEventListener("click",ToggleEventfunction3);
icText4.addEventListener("click",ToggleEventfunction4);
icText5.addEventListener("click",ToggleEventfunction5);
icText6.addEventListener("click",ToggleEventfunction6);

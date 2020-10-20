//get the modal
let mo= document.querySelector("#modal");
//get the botton that opens that modal 
let btn =document.querySelector(".Btn");
//get the <span> element that closes the modal
let span= document.querySelector(".close");
// when the user clicks the button, open the modal
btn.onclick = function(){
    mo.style.display="block";
}
//when the user clicks on <span> (x), close the modal
span.onclick=function(){
   mo.style.display="none";
}
//when the user clicks anywhere outside of the modal,close it
mo.onclick=function(event){
    if (event.target == mo){
        mo.style.display="none";
    }
}




//get the modal
let mo2= document.querySelector("#modal2");
//get the botton that opens that modal 
let btn2 =document.querySelector(".Btn2");
//get the <span> element that closes the modal
let span2 = document.querySelector(".close2");
// when the user clicks the button, open the modal
btn2.onclick = function(){
    mo2.style.display="block";
}
//when the user clicks on <span> (x), close the modal
span2.onclick=function(){
   mo2.style.display="none";
}
//when the user clicks anywhere outside of the modal,close it
mo2.onclick=function(event){
    if (event.target == mo2){
        mo2.style.display="none";
    }
}

//get the modal
let mo3= document.querySelector("#modal3");
//get the botton that opens that modal 
let btn3 = document.querySelector(".Btn3");
//get the <span> element that closes the modal
let span3= document.querySelector(".close3");
// when the user clicks the button, open the modal
btn3.onclick= function(){
    mo3.style.display="block";
}
//when the user clicks on <span> (x), close the modal
span3.onclick=function(){
    mo3.style.display="none";
}
//when the user clicks anywhere outside of the modal,close it
mo3.onclick=function(event){
    if(event.target == mo3){
        mo3.style.display="none";
    }
}



//get the modal
let mo4= document.querySelector("#modal4");
//get the botton that opens that modal 
let btn4 = document.querySelector(".Btn4");
//get the <span> element that closes the modal
let span4= document.querySelector(".close4");
// when the user clicks the button, open the modal
btn4.onclick= function(){
    mo4.style.display="block";
}
//when the user clicks on <span> (x), close the modal
span4.onclick=function(){
    mo4.style.display="none";
}
//when the user clicks anywhere outside of the modal,close it
mo4.onclick=function(event){
    if(event.target == mo4){
        mo4.style.display="none";
    }
}






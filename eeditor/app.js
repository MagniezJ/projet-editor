let text = document.getElementById("story");
let loader=document.getElementsByClassName("loader");

text.addEventListener('keyup', function () {
    if(text.value != 0){
    document.getElementById("p").innerHTML=text.value;
    document.getElementById("loader-2").style.visibility = "hidden";
    document.getElementById("compteur").innerHTML = p.innerText.length;
    }else{
        document.getElementById("loader-2").style.visibility = "visible";
        document.getElementById("compteur").innerHTML = " ";
    document.getElementById("p").innerHTML="";
    }
    
});

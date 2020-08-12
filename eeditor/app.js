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
    if (css.innerText != 0){
        css.value="<style type=\"text/css\"></style>" +css.value;
    }
    
});


let bold=document.getElementById("bold");
bold.addEventListener('click', (e)=> {
   /*  document.execCommand("bold", false, null) */
   text.value= text.value+"<b>"+"</b>";
   document.getElementById("story").innerHTML=text.value;
});

let italic=document.getElementById("italic");
italic.addEventListener('click', (f)=> {
   /*  document.execCommand("bold", false, null) */
   text.value= text.value+"<i>"+"</i>";
   document.getElementById("story").innerHTML=text.value;
});

let css= document.getElementById("css");
let scss=document.getElementById("scss");
let style=document.getElementById("style");
let sstyle=document.getElementById("sendstyle");
style.addEventListener('click',(f)=>{
    document.getElementById("css").style.visibility = "visible";
    css.value="<style type=\"text/css\"></style>" +css.value;
    document.getElementById("css").innerHTML=css.value;
    document.getElementById("sendstyle").style.visibility="visible";
    document.getElementById("scss").style.visibility = "visible";
});

sstyle.addEventListener('click',(e)=>{
    p.value=css.value+text.value;
    document.getElementById('p').innerHTML=p.value;
})


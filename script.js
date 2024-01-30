let links = document.querySelector("#cnt-links");
let cnt = document.querySelector("#cnt");
let c=0;
let body=document.querySelector("body");
let bg = body.style.backgroundImage;
let bgcolor=body.style.backgroundColor;
body.style.backgroundColor = "#092635";
body.style.backgroundImage="none";

cnt.addEventListener("click",() => {
        if(c===0){
                links.style.display="flex";
                console.log(c);
                cnt.innerHTML="Hide Contacts";
                c=1;
        }else{
                links.style.display="none";
                console.log(c);
                cnt.innerHTML="Contact Me";
                c=0;
        }
})

setTimeout(function(){
        body.style.backgroundImage=bg;
        body.style.backgroundColor=bgcolor;
        document.querySelector("#load").style.display="none";
        document.querySelector(".content").style.display="block";
},4200)

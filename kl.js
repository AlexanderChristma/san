// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".mmhpics");
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     if(contentposition < screenposition){
//         content.classList.add("active");
//     }else{
//         content.classList.remove("active");
//     }

// });



var menu = document.getElementById("menu");
var nav = document.getElementById("navbar");
var close = document.getElementById("close");
 
if(menu){
    menu.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}
close.addEventListener("click", ()=>{
    nav.classList.remove("active");
})

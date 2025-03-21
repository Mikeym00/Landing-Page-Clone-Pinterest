const scrollButton = document.getElementById("backToTop");

// 130px
setInterval(() =>{
    if(window.scrollY >= 130){
        scrollButton.classList.remove("d-none");
        scrollButton.classList.add("d-flex");
    }else{
        scrollButton.classList.remove("d-flex");
        scrollButton.classList.add("d-none");
    }
}, 250);


scrollButton.addEventListener("click", ()=>{
    window.scroll(0,0); 
});






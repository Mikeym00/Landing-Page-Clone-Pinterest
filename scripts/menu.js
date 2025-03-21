// hover over button --> menu appears - whilst hovering over button and drop down menu, menu remains shown
// if cursor is moved outside of these, menu disappears


const mensMenu = document.getElementById("mens");
const deepMenuMens = document.getElementById("hover-menu-1");

const womensMenu = document.getElementById("womens");
const deepMenuWomens = document.getElementById("hover-menu-2");

const outletMenu = document.getElementById("outlet");
const deepMenuOutlet = document.getElementById("hover-menu-3");



const hoverMenuBackdrop1 = document.getElementById("backdrop-1");
const hoverMenuBackdrop2 = document.getElementById("backdrop-2");
const hoverMenuBackdrop3 = document.getElementById("backdrop-3");


// CONSIDER REJIGGING MENU ITEMS --> MENU ITEM LINKS ARE CONTINUGOUS + WITHOUT GAP
//  ATTACH BACKDROP TO THE LIST, NOT EACH INDIVIDUAL ITEM

mensMenu.addEventListener("mouseover", () =>{
    handler(mensMenu,deepMenuMens,hoverMenuBackdrop1);
});

womensMenu.addEventListener("mouseover", () =>{
    handler(womensMenu,deepMenuWomens,hoverMenuBackdrop2);
});

outletMenu.addEventListener("mouseover", () =>{
    handler(outletMenu,deepMenuOutlet,hoverMenuBackdrop3);
});




function handler(menuName, deepMenuName,backDrop){
    deepMenuName.classList.remove("d-none")
    backDrop.classList.remove("d-none")


    // cursor from menu to deep-menu
    menuName.addEventListener("mouseleave", () =>{
        // set  a time out function that will add d-none after x amount of time 
        const t = setTimeout(() =>{
        deepMenuName.classList.add("d-none");
        backDrop.classList.add("d-none")

        },1);
    // however, if mouse hovers over dropdown menu, clear/cancel the timer
        deepMenuName.addEventListener("mouseenter", () =>{
            clearTimeout(t);
            deepMenuName.classList.remove("d-none");
            backDrop.classList.remove("d-none")

        });
 
    });


    // cursor from deep-menu to menu
    deepMenuName.addEventListener("mouseleave", () =>{
        const t2 = setTimeout(() =>{
        deepMenuName.classList.add("d-none");
        backDrop.classList.add("d-none")

        },1);

        menuName.addEventListener("mouseenter", () =>{
            clearTimeout(t2);
            deepMenuName.classList.remove("d-none");
            backDrop.classList.remove("d-none")

        });
    });
};





var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")

/*function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-skills")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-skills")

}*/


/*
var sidemenu=document.getElementById("side-menu")
var openmenu=document.getElementById("open-menu")
var closemenu=document.getElementById("close-menu")

function openmenu(){
    sidemenu.style.right="0"
}

function closemenu(){
    sidemenu.style.right="-200px"
}*/

const sideMenu = document.getElementById("side-menu");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");

function openMenu() {
    sideMenu.classList.add("active");
}

function closeMenu() {
    sideMenu.classList.remove("active");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
  
const button = document.getElementById("btn");
const menu = document.getElementById("shut");
const toggle = document.getElementById("toggle");


function closeMenu(){
    menu.style.display = 'none';
    toggle.style.zIndex = '52';
}

function openMenu(){

    menu.style.display = 'block';
    toggle.style.zIndex = '1';
}

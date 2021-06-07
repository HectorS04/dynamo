
let menuStatus = true;
let menu = document.getElementById("menu");
let btnmenu = document.getElementById("btn-menu");
let iconmenu = document.getElementById("icon-menu");
let shadow = document.getElementById("shadow");
let navbar =document.getElementById("navbar");
btnmenu.addEventListener("click",shmenu);
shadow.addEventListener("click",shmenu);

function shmenu(){
   if(menuStatus){
      menuStatus = false;
      menu.classList.remove('menu-noactive');
      menu.classList.add('menu-active');
      iconmenu.classList.remove('fa-bars');
      iconmenu.classList.add('fa-times');
      shadow.classList.add('shadow');
      
   }else{
      menuStatus = true;
      menu.classList.remove('menu-active');
      menu.classList.add('menu-noactive');
      iconmenu.classList.remove('fa-times');
      iconmenu.classList.add('fa-bars');
      shadow.classList.remove('shadow');
   }
   // console.log(x);
}

window.onscroll = function() {
   let y = window.scrollY;
   console.log(y);
   if(y >= 150) {
      navbar.style.background = "#0e0d0df9";
   }else {
      navbar.style.background = "#0e0d0d36";
      
   }
 };


// alert("po");

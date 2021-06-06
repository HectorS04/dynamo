
let menu = document.getElementById("menu");
let btnmenu = document.getElementById("btn-menu");
let iconmenu = document.getElementById("icon-menu");
let shadow = document.getElementById("shadow");

btnmenu.addEventListener("click",algo);
shadow.addEventListener("click",algo)

function algo(){
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

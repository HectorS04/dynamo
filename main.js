
let menuStatus = true;
let menu = document.getElementById("menu");
let btnmenu = document.getElementById("btn-menu");
let iconmenu = document.getElementById("icon-menu");

btnmenu.addEventListener("click",algo);


function algo(){
   if(menuStatus){
      menuStatus = false;
      menu.classList.remove('menu-noactive');
      menu.classList.add('menu-active');
      iconmenu.classList.remove('fa-bars');
      iconmenu.classList.add('fa-times');
   }else{
      menuStatus = true;
      menu.classList.remove('menu-active');
      menu.classList.add('menu-noactive');
      iconmenu.classList.remove('fa-times');
      iconmenu.classList.add('fa-bars');
   }
   // console.log(x);
}
// alert("po");

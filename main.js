
let menuStatus = true;
let menu = document.getElementById("menu");
let btnmenu = document.getElementById("btn-menu");
let iconmenu = document.getElementById("icon-menu");
let shadow = document.getElementById("shadow");
let navbar =document.getElementById("navbar");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let carouselInfo = document.getElementById("carousel-info");
let i0=document.getElementById("i-0"), i1=document.getElementById("i-1"), i2=document.getElementById("i-2");
btnmenu.addEventListener("click",shmenu);
shadow.addEventListener("click",shmenu);
previous.addEventListener("click",slider);
next.addEventListener("click",slider);

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

let count = 0;
function slider() {
   if(count === 0){
      count++;
      carouselInfo.innerHTML = `<h1 class="carousel-title"><sapn class="t-red">Subscription</sapn><br>Package</h1>
      <p class="carousel-text" >We Provide a quality streaming solution for you with fully stable streams and support. Order a <a class="t-red " href="#">FREE trial</a> today and see for yourself!</p>`;
      i1.classList.remove('active');
      i2.classList.add('active');
      // alert(count);
   }else {
      count--;
      carouselInfo.innerHTML = `<h1 class="carousel-title">Welcome<br>To <span class="t-red">Dynamo TV</span></h1>
      <p class="carousel-text" >We Offer The Best Streaming Service With A Wide Variety Of Live TV And Events From Around The World. The Service Is Available On Various Platforms And Devices. Have A Look Aroun To Find The Best Package For You. Enjoy!</p>
      <a class="btn btn-p" href="#" >Click Here</a>`
      i2.classList.remove('active');
      i1.classList.add('active');
   }
   
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

var heightWindow;

setInterval(function() {
   heightWindow = (document.documentElement.scrollTop || window.pageYOffset);
   if(heightWindow > 40){
    document.getElementById("header_t").classList.add("header");
    document.getElementById("header_t").classList.remove("conteiner_header");
  }
  else{
    document.getElementById("header_t").classList.add("conteiner_header");
    document.getElementById("header_t").classList.remove("header");
  }
}, 100);

setInterval(function(){
  var data = new Date(),
  days = data.getDay(),
  hours = data.getHours(),
  minutes = data.getMinutes(),
  seconds = data.getSeconds();
  document.getElementById("count_cell_h1").innerHTML = days;
  document.getElementById("count_cell_h2").innerHTML = hours;
  document.getElementById("count_cell_h3").innerHTML = minutes;
  document.getElementById("count_cell_h4").innerHTML = seconds;
},1000);


var btn_log_menu = document.getElementById("log_menu"),
    menu = document.querySelector(".menu");

    btn_log_menu.onclick = function (){
       menu.classList.toggle("menu_hidden");
    };
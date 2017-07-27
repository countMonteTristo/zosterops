$(document).ready(function () {
   var main_container = $(#main_container);

   $("h1").hover(function(){
    $(main_container).css("background-color", "yellow");
    }, function(){
    $(main_container).css("background-color", "pink");
});
}

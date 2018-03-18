$(function(){
    console.log('działa!');
var carouselList = $("#carousel ul"); 
function movefirstslide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
};
$('#carousel').animate({'marginLeft':'-400'},500,movefirstslide);
$(carouselList).setInterval(changeSlide, 3000);


});


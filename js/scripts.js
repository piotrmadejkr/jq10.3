$(function(){
    console.log('działa!');
    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000).event(changeSlide () {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide)});
    
});
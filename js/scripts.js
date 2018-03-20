$(function(){
console.log('dziala');
var carouselList = $("#carousel ul"); 

function Changeslide () {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last")
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0})
};
 
var sliderMove = setInterval(function(){
    carouselList.animate({'margin-left': '-=400px'}, 1000, Changeslide);
}, 3000);   


});


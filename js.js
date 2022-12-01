$(document).ready(function() {
    //Init the carousel
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoHeight:true,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        center: true,
        loop:true,
        margin:10,
        items:1.5
    });
  
    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 4000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
});
function openNav(){
    document.getElementById('menu').style.width = '50%';
}
function closeNav(){
    document.getElementById('menu').style.width = '0%';
}
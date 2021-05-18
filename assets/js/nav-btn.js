(function($){
    $("#overlay-btn").click(
    function navBtn() {
        document.getElementById('overlay-btn').classList.toggle("change");
        var x = document.getElementById('myNav');
        var y = document.getElementById('main-nav');
        if (x.style.height === "100%") {
            x.style.height = "0%";
            $('.overlay').css("z-index","0");
            $('.main').removeClass('active');
            $("body").removeClass('noscroll');
            $(y).addClass('sticky-top');
        } else {
            x.style.height = "100%";
            $('.overlay').css("z-index","1020");
            $('.main').addClass('active');
            $("body").addClass('noscroll');
            $(y).removeClass('sticky-top');
        }
    });
    $("#mobile-overlay").click(
    function mobileNavBtn(){
        document.getElementById('mobile-overlay').classList.toggle("change");
        var x = document.getElementById('myNav');
        var y = document.getElementById('main-nav');
        if(x.style.height === "100%") {
            x.style.height ="0%";
            $('.overlay').css("z-index","0");
            $('.main').removeClass('active');
            $("body").removeClass('noscroll');
            $(y).addClass('sticky-top');
        } else {
            x.style.height = "100%";
            $('.overlay').css("z-index","1020");
            $('.main').addClass('active');
            $("body").addClass('noscroll');
            $(y).removeClass('sticky-top');
        }
    });
})(jQuery);

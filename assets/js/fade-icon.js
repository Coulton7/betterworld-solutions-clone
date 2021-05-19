(function($) {

  $.fn.fadeIcon = function() {

    var fade_icon = jQuery(".fade-icon");
    var iconIndex = -1;

    function showNextIcon() {
      ++iconIndex;
      fade_icon.eq(iconIndex % fade_icon.length)
        .fadeIn(900)
        .delay(1800)
        .fadeOut(900, showNextIcon);
    }

    showNextIcon();
  };

})(jQuery);

jQuery(document).ready(function() {
  jQuery('body').fadeIcon();
  jQuery('.fade-icon').hover(function() {
    $(this).stop(true, true).fadeIn();
  }, function() {
    $(this).stop(true, true).fadeOut();
    jQuery('body').fadeIcon();
  });
    jQuery('.show-icon').hover(function() {
    $('.fade-icon').stop(true, true).fadeIn();
  }, function() {
    $('.fade-icon').stop(true, true).fadeOut();
    });
}); 
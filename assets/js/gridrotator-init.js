(function($) {
  $(document).ready(function() {
    $( '#ri-grid' ).gridrotator( {
      rows : 2,
      columns : 4,
      animType	: 'slideBottom',
      animSpeed	: 1000,
      interval	: 600,
      step		: 1,
      interval : 2000,
      w1024 : {
        rows : 1,
        columns : 6
      },
      w768 : {
        rows : 2,
        columns : 3
      },
      w480 : {
        rows : 2,
        columns : 3
      },
      w320 : {
        rows : 3,
        columns : 2
      },
      w240 : {
        rows : 3,
        columns : 2
      },
    });
  });
})(jQuery);
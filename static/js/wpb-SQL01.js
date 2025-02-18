
 
(function($) { //noConflict mode
  $(document).ready(function() { 
    $('#SQL01').click(SQL01);
    function SQL01() {
        var ajaxURL = wpUrl + 'sql01/';

        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
          type: 'GET',
          headers: {"Authorization": localStorage.getItem('JWT')},
          success:function(msg) {
            console.log("SQL 01 - success");
            output(msg);
          },
          error: function () {
            output("ERROR");
          }
        });
    }
    function output(msg) {
      $('#output').html(msg);
  }
    
});//end document.ready
})(jQuery);

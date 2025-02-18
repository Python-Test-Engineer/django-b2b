
 
(function($) { //noConflict mode
  $(document).ready(function() { 
    $('#json05').click(json05);
    function json05() {
        var ajaxURL = wpUrl + 'json05/';
        
        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
          type: 'GET',
          success:function(msg) {
            console.log("success");
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

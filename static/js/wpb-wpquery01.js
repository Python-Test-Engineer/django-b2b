
(function($) { //noConflict mode
  $(document).ready(function() { 
    // Click event handler.
    $('#wpquery01').click(wpquery01);
    // Function on being clicked.
    function wpquery01() {
      var ajaxURL = wpUrl + 'wpquery01/?id=375';
      // console.log(ajaxURL);
      // console.log(localStorage.getItem('JWT'));
      $.ajax({
        url: ajaxURL, //a string value so either literal in quotes or a sting variable
        // HEADER FOR AUTHENTICATION
        headers: {"Authorization": localStorage.getItem('JWT')},

        type: 'GET',
        
        success:function(msg) {
          //console.log(msg);
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

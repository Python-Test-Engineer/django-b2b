
(function($) { //noConflict mode
  $(document).ready(function() { 

    function output(msg) {
        $('#output').html("<h1>Using <b>wp_list_pages()</b> and <b>page-list-pages.php</b>.</h1>" + msg);
    }
    $('#listPages').click(listPages);
    function listPages() {
      var ajaxURL = wpUrl + 'list-pages/';
      
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
    
});//end document.ready
})(jQuery);

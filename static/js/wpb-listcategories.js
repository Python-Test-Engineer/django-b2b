
(function($) { //noConflict mode
  $(document).ready(function() { 

    function output(msg) {
        
        $('#output').html("<h1>Using <b>wp_list_categories()</b> and <b>page-list-categories.php</b>.</h1>" + msg);
    }
    $('#listCategories').click(listCategories);
    function listCategories() {
      var ajaxURL = wpUrl +'list-categories-blog/';
      
      $.ajax({
        url: ajaxURL, //a string value so either literal in quotes or a sting variable
        headers: {"Authorization": localStorage.getItem('JWT')},
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

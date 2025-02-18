
 
(function($) { //noConflict mode
  $(document).ready(function() { 
    $('#JWT').click(JWT);
    function JWT() {
        console.log("JWT");
        var ajaxURL = wpUrl + 'jwt/';
        
        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
          headers: {"Authorization": localStorage.getItem('JWT')},
          type: 'GET',
         
          
          success:function(msg) {
            console.log("success - token sent back is " + msg);
            output(msg);
          },
          error: function () {
            output("ERROR");
          }
        });
    }
    function output(msg) {
      var info = "<h2>Once logged in, a local storage variable JWT is made with the JWT token.";
      
      $('#output').html(info + "<h1><b>JWT Token: " + msg + "</b></h1>");
  }
    
});//end document.ready
})(jQuery);

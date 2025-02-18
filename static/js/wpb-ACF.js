
// Libraries other than jQuery may also use $ as an alias. This can cause interference between those libraries and jQuery.

// To release $ for use with other libraries:

// jQuery.noConflict();
// After calling this function, $ is no longer an alias for jQuery. However, you can still use the variable jQuery itself to access jQuery functions:

// jQuery('#hello').text('Hello, World!');
// Optionally, you can assign a different variable as an alias for jQuery:

// var jqy = jQuery.noConflict();
// jqy('#hello').text('Hello, World!');

// Conversely, to prevent other libraries from interfering with jQuery, you can wrap your jQuery code in an immediately invoked function expression (IIFE) and pass in jQuery as the argument:

// (function($) {
//     $(document).ready(function() {
//         $('#hello').text('Hello, World!');
//     });
// })     (jQuery);
// Inside this IIFE, $ is an alias for jQuery only.

(function($) { //noConflict mode IIFE

  // usual jquery

  $(document).ready(function() { 
     // Click Event Handler.
    $('#ACF').click(ACF);
    // Function when clicked.
    function ACF() {
        //ar x = ""; //
        var ajaxURL = wpUrl + 'acf/?id=264';
        var data = "";
        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
          type: 'GET',
          success:function(result) {
            console.log("ACF - success");
            console.log(result);
            data += "<h1>This is data from page-acf.php outputting Custom Post Type Product that uses Advanced Custom Fields, (in <span style='color:purple;font-weight:bold;'>bold purple).</h1>";
            data += "<span style='color:purple;font-weight:bold;'>" + result.Details + "</span> It costs only <span style='color:purple;font-weight:bold;'>£" + result.Price   + "</span> and we have <span style='color:purple;font-weight:bold;'>" + result.Qty + " </span>in stock. Order today!<br>";
            output(data);
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
   // usual jquery
})(jQuery); //IIFE


(function($) { //noConflict mode
  $(document).ready(function() { 

    function output(msg) {
        $('#output').html(msg);
    }
    // Click Event Handler.
    $('#jsonServer01').click(jsonServer01);
    // Function when clicked.
    function jsonServer01() {
      var ajaxURL = wpUrl + 'jsonServer01/';

      $.getJSON(ajaxURL, function(result){
        console.log(result);
        var data = "<h1><p>This is using <b>page-jsonserver01.php</b> to produce JSON output.</p><p>The data is then rendered via an AJAX call <b>wpb-jsonserver01.js</b>.</p></h1>";
        var resLength = result.length;
        console.log("length " + resLength);
        data += "<p>";
        for(i=0;i < resLength;i++) {
            data += result[i].EventID + "-" + result[i].EventName + "<br>";
        }
        data += "</p>";
        output(data);
        
      });       
    }
});//end document.ready
})(jQuery);

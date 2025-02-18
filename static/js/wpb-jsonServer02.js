
//(function($) { //noConflict mode

  $(document).ready(function() { 

    function output(msg) {
        $('#output').html(msg);
    }
    $('#jsonServer02').click(jsonServer02);
    function jsonServer02() {
        var ajaxURL = wpUrl + 'jsonServer02/';
        $.getJSON(ajaxURL, function(result){
            console.log(result);
            var data = "<h1><p>This is using <b>page-jsonserver02.php</b> to produce JSON output.</p><p>The data is then rendered via and AJAX call <b>wpb-jsonserver02.js</b>.</p></h1>";
            var resLength = result.length;
            console.log("length " + resLength);
            data += "<p>";
            for(i=0;i < resLength;i++) {
                data += result[i].ID + "-" + result[i].Name + "<br>";
            }
            data += "</p>";
            output(data);          
            });
   }
});//end document.ready

//})(jQuery);

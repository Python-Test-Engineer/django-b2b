var area = "#wpComponent";
//wpUrl is root of site and stored in js/global.js
var ajaxURL = wpUrl + "show-post/?id=955";

$.ajax({
url: ajaxURL, //a string value so either literal in quotes or a sting variable      
type: 'GET',

success:function(msg) {
    console.log(msg);
    outputData(msg,area);
},
error: function () {
    outputData("ERROR",area);
}
});
function outputData(msg, area) 
{
$(area).html(msg);
}

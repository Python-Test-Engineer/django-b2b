
//wpUrl is root of site and stored in js/global.js
var ajaxURL2 = wpUrl + 'wpquery01/?id=375';
console.log(ajaxURL2);
$.ajax({
  url: ajaxURL2, //a string value so either literal in quotes or a sting variable
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


function output(msg) {
  $('#wpComponent2').html(msg);
}

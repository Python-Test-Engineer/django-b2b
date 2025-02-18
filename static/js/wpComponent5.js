
//wpUrl is root of site and stored in js/global.js
var ajaxURL5 = wpUrl + 'wpquery02/?id=375';
console.log(ajaxURL5);
$.ajax({
  url: ajaxURL5, //a string value so either literal in quotes or a sting variable
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
  $('#wpComponent5').html(msg);
}

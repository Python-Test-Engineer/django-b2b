
//wpUrl is root of site and stored in js/global.js
var ajaxURL3 = wpUrl + 'sql01/';
console.log(ajaxURL3);
$.ajax({
  url: ajaxURL3, //a string value so either literal in quotes or a sting variable
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
  $('#wpComponent3').html(msg);
}

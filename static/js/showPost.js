
function showPost(x) 
  {
    event.preventDefault();
    //wpUrl is a global variable in globals.js
    var url = wpUrl + "show-post/?id=" + x;
    //postArea = #post div
    getData(url, thePost); // we want to show post in bottom card and this gets the variable that was set in blog.html
    return false;
  }

function getData(url, outputArea) 
  {
    var ajaxURL = url;
    
    $.ajax({
      url: ajaxURL, //a string value so either literal in quotes or a sting variable
      type: 'GET',
      success:function(msg) {
        console.log("============== showPost.js =================");
        console.log(msg);
        outputData(msg,outputArea);
      },
      error: function () {
        outputData("ERROR",outputArea);
      }
    });
  }

function outputData(msg, outputArea) 
  {
    $(outputArea).html(msg);
  }


    function loadPostsInCategory() 
      {
        event.preventDefault();
        var x = $(this).attr("id");
        // wpUrl is a global variable in globals.js
        var url = wpUrl + "list-posts-by-category/?catname=" + x;

        getData(url, listPosts); // gets data and outputs in area
      
        return false;
      }
      function outputData(msg, outputArea) 
      {
        $(outputArea).html(msg);
      }
    

  function getData(url,area) 
    {
      var ajaxURL = url;
      //console.log("loadPosts");
      $.ajax({
        url: ajaxURL, // a string value so either literal in quotes or a sting variable
        type: 'GET',
        success:function(msg) {
          console.log("============== LoadPostsInCategories.js =================");
          console.log(msg);
          outputData(msg,area);
        },
        error: function () {
          outputData("ERROR",area);
        }
      });
    }
  
  function outputData(msg, area) 
    {
      $(area).html(msg);
    }

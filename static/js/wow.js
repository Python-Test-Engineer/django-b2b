 wpquery01();
      $("#wpquery01").click(); 
      // Function on being clicked.
      function wpquery01() {
        var ajaxURL = wpUrl + 'wpquery01/?id=375';
        console.log(ajaxURL);
        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
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
        $.ajax({
          url: ajaxURL, //a string value so either literal in quotes or a sting variable
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
      }

      function output(msg) {
          $('#output').html(msg);
      }
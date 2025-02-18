
    
(function($) { //noConflict mode
  $(document).ready(function() { 

  //*********** ?FAV PROG LANG ************// 
  $('#getPosts').click(wpPosts);
    
  function wpPosts() 
    { 
        // https://integratedwebsolutions.co.uk/wpb/wp-json/wp/v2/posts
        $.ajax( 
            {
              url: 'https://integratedwebsolutions.co.uk/wpb/wp-json/wp/v2/posts',
              success:function(msg) 
                {
                  console.log(msg);
                  var html = "";
                 
                  html += "<br><h3><b>Post Title: " + msg[0].title.rendered + "</b></h3>";
                  html += "AuthorID: " + msg[0].author;
                  html += "<br>" + msg[0].content.rendered;
               
                  html += "<br><h3><b>Post Title: " + msg[1].title.rendered + "</b></h3>";
                  html += "<br><br>AuthorID: " + msg[1].author;
                  html += "<br>" + msg[1].content.rendered;
                  outputPosts(html);
                },
                error: function () 
                {
                  outputPosts("ERROR");
                }
            }     
        );
        function outputPosts(msg) 
            {
                $('#outputPosts').html(msg);
            }
    }
        
});//end document.ready
})(jQuery);

// jQuery(document).ready(function( $ ) 
//     {
//       $('#getPosts').click(wpPosts);
    
//       function wpPosts() 
//         { 
//             // https://integratedwebsolutions.co.uk/wpb/wp-json/wp/v2/posts
//             $.ajax( 
//                 {
//                   url: 'https://integratedwebsolutions.co.uk/wpb/wp-json/wp/v2/posts',
//                   success:function(msg) 
//                     {
//                       console.log(msg);
//                       var html = "";
                     
//                       html += "<br><h3><b>Post Title: " + msg[0].title.rendered + "</b></h3>";
//                       html += "AuthorID: " + msg[0].author;
//                       html += "<br>" + msg[0].content.rendered;
                   
//                       html += "<br><h3><b>Post Title: " + msg[1].title.rendered + "</b></h3>";
//                       html += "<br><br>AuthorID: " + msg[1].author;
//                       html += "<br>" + msg[1].content.rendered;
//                       outputPosts(html);
//                     },
//                     error: function () 
//                     {
//                       outputPosts("ERROR");
//                     }
//                   }     
//             )  
//             function outputPosts(msg) 
//                 {
//                     $('#outputPosts').html(msg);
//                 }
//         }
//     });
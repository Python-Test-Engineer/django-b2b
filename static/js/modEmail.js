
(function($) { //noConflict mode
    $(document).ready(function() { 
        
    //*********** ?EMAIL *****************//
      $("#email").keyup(checkEmail);
      function checkEmail() //#cEmail
          {  
              $("#status").html("Doing checkEmail()" ) ;
              var elem = $("#email");
              var email = elem.val();
              var regEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
              if (regEx.test(email))
                  { 
                      $("#emailText").html("<span class='success'>Thank you!</span>");
                      emailValid = true;
                      elem.removeClass("input-error");    
                      elem.addClass("input-success");
                      $("#emailSPAN").html("<b>Email:</b> <span class='success'>OK</span>");
                     
                  }
              else 
                  {
                      $("#emailText").html("<span class='error'>A valid email is required.</span>");
                      emailValid = false;
                      elem.removeClass("input-success"); 
                      elem.addClass("input-error");
                      $("#emailSPAN").html("<b>Email:</b> <span class='error'>NOT OK</span>");
                     
                  }
             // $("#btnSubmit").mouseover(); //trigger a checkform
             $("#btnNoShow").click();
          }
      });//end document.ready
    })(jQuery);
  
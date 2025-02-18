
(function($) { //noConflict mode
  $(document).ready(function() { 

//********* ?VALIDPASSWORD **********//

    $("#pswa").keyup(checkPSWA); 
    function checkPSWA() //#cPA
    {
        var elem = $("#pswa"); 
        var pswa = $("#pswa").val();
        var regEx = /(?=\w{6,})(?=\D*\d)/; //6 or more characters and 1 number
       
        if (regEx.test(pswa)) 
        {
            $("#pswaText").html("<span class='success'>Thank you! Your password is VALID.</span>");
            passwordValid = true;
            $('#pswb').prop('disabled', false);
            elem.removeClass("input-error");    
            elem.addClass("input-success");
            $("#passwordvalidSPAN").html("<b>Password valid:</b> <span class='success'>OK</span>");
          

        } 
        else 
        {
            $("#pswaText").html("<span class='error'>Password invalid. Must be at least 6 characters and one number.</span>");
            passwordValid = false;
            elem.removeClass("input-success");    
            elem.addClass("input-error");
            $("#passwordvalidSPAN").html("<b>Password valid:</b> <span class='error'>NOT OK</span>");
        }
        $("#btnNoShow").click();
        //$("#btnSubmit").mouseover(); //trigger a checkform
    }
    });//end document.ready
  })(jQuery);

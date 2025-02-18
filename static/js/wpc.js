var blog = wpUrl + 'wp-component/';
$.ajax({
    url: blog, //a string value so either literal in quotes or a sting variable
    type: 'GET',
    success:function(msg) {
        console.log("BLOG");
        console.log(msg);
        output(msg, "#mainContent3");
    },
    error: function () {
        output("ERROR");
    }
});

function output(msg, area) 
{
    $(area).html(msg);
}
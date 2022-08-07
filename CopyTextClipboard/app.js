$(document).ready(function(){
    $("#btn").click(function(){
        $("#text1").select();
        document.execCommand("copy");
    });
});
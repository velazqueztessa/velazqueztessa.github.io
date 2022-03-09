$(document).ready(function (){

    $("#titulo").click(function () {
        $(this).hide();
    });

    $("#boton").click(function (){
            $("#e1").fadeToggle(1500); 
            $("#e2").fadeToggle(2000); 
            $("#e3").fadeToggle(2500);
            
            $("#e1").fadeTo("slow", 0.2);
            $("#e2").fadeTo("slow", 0.5);
            $("#e3").fadeTo("slow", 0.7);
    });

    $("#lista").click(function () {
        $("#contenido").slideToggle("slow");
    });

});
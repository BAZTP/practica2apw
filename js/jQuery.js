$(document).ready(function(){
    $("#nombre1").mouseenter(function(){
        $("#dropdawn-content-redes-Bryan").show();
        $("#dropdawn-content-redes-Danny").hide();
        $("#dropdawn-content-redes-Michael").hide();
    });
    $("#nombre2").mouseenter(function(){
        $("#dropdawn-content-redes-Danny").show();
        $("#dropdawn-content-redes-Bryan").hide();
        $("#dropdawn-content-redes-Michael").hide();
    });
    $("#nombre3").mouseenter(function(){
        $("#dropdawn-content-redes-Michael").show();
        $("#dropdawn-content-redes-Bryan").hide();
        $("#dropdawn-content-redes-Danny").hide();
    });
    $("#dropdawn-content-redes-Bryan").mouseleave(function(){
        $("#dropdawn-content-redes-Bryan").hide();
    });
    $("#dropdawn-content-redes-Danny").mouseleave(function(){
        $("#dropdawn-content-redes-Danny").hide();
    });
    $("#dropdawn-content-redes-Michael").mouseleave(function(){
        $("#dropdawn-content-redes-Michael").hide();
    });
  });
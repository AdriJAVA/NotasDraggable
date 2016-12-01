
function cambiarColor(){
    var checks = document.getElementsByClassName("check");
    
    var notas = document.getElementsByClassName("nota");
    
    var colorelejido = document.getElementById("color");
    
    for(var i = 0; i < checks.length; i++){
       if(checks[i].checked == true){
           for(var j = 0;  j < notas.length; j++){
               if(checks[i].id.slice(-1) == notas[i].id.slice(-1)){
                   notas[i].style.backgroundColor = colorelejido.style.backgroundColor;  
               }
           }
       }
    }
                                                                 
}

function borrarTodo(){
    var notas = document.getElementsByClassName("nota");
    for(var i = notas.length-1; i >= 0; i--){
        document.body.removeChild(notas[i]);
         }
    eliminarTodo();
}


function hacerPantallazo(){
    html2canvas(document.body, {
        onrendered: function (canvas) {
        var img = canvas.toDataURL("image/png");
        var enlace = document.getElementById("descargar");
        enlace.href = img;
        enlace.download = "notas.png";
        enlace.click();
      
      },
    })};

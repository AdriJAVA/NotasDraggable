var indice = 0;

function nota(aleatorioTop,aleatorioLeft){
    
        indice++;
        
        var nota = document.createElement("DIV");
    
        nota.className = "nota draggable";
            
        nota.id = "nota" + indice;

        var textarea = document.createElement("TEXTAREA");
    
        textarea.className = "textoMod";

        textarea.id= "textoMod" + indice;

        var parrafo = document.createElement("P");

        parrafo.className = "parrafo";

        parrafo.id= "parrafo" + indice;
    
        var chincheta = document.createElement("INPUT");
    
        chincheta.setAttribute("type", "image");
    
        chincheta.src = "Iconos/chincheta.png";
    
        chincheta.className = "chincheta";
    
        var check = document.createElement("INPUT");
    
        check.setAttribute("type", "checkbox");
    
        check.id = "checkbox" + indice;
    
        check.className = "check";
    
        var label = document.createElement("LABEL");
    
        label.htmlFor = "checkbox" + indice;
            
        nota.appendChild(textarea);
    
        nota.appendChild(parrafo);
        
        nota.appendChild(chincheta);
    
        nota.appendChild(check);
    
        nota.appendChild(label);
    
        nota.style.top =  aleatorioTop + "px";

        nota.style.left = aleatorioLeft + "px";
        

        nota.ondblclick = function(){
            textarea.style.visibility = "visible";
            parrafo.style.visibility = "hidden";
        }

        nota.onmouseleave  = function(){
            parrafo.innerHTML = textarea.value;
            textarea.style.visibility = "hidden";
            parrafo.style.visibility = "visible";
        }
        
        chincheta.onclick = function(){
            document.body.removeChild(nota);
        }
        
         draggable();
    
     document.body.appendChild(nota);
}

(function(){
    var formulario = document.formulario_registro;
    var elementos = formulario_registro.elements;

    // Functions
    var enviar = function(e){
        if(!validarInputs()){
            console.log('Falto validar inputs');
            e.preventDefault();
        }else{
            console.log('Envio correctamente');
            //comentar esta linea cuando este listo.
        }
    };

    var focusInput = function(){
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    };

    var blurInput = function(){
        if (this.value <= 0){
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }

    };

    // Events

    formulario.addEventListener("submit", enviar);

    for(var i = 0; i < elementos.length; i++){
        if (elementos[i].type == "text"  || elementos[i].type == "email" ) {
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }
    }

}())
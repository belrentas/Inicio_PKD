const form = document.getElementById("PC");
const btnEnviar = document.getElementById("btn-enviar");
const nome = document.getElementById("name");
const telefone = document.getElementById("tel");
const email = document.getElementById("email");
const interesses = document.getElementById("int");
const item = {nome, telefone, email, interesses};


form.addEventListener("submit", function (event){
    event.preventDefault();

    

    if(nome.value === "") {
        alert("Por favor, preencha o campo Nome.")
        
    }  
         
    if(telefone.value === "") {
        alert("Por favor, preencha o campo Telefone.")
    }
       
    if(email.value === "") {
        alert("Por favor, preencha o campo E-mail.")
            
    }

    if(interesses.value === "") {
        alert("Por favor, preencha o campo Interesses.")
            
    } 

});

    
    







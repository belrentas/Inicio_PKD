const form = document.getElementById("fm");
const btnEnviar = document.getElementById("enviar");
const email = document.getElementById("lg-email");
const senha = document.getElementById("lgsenha");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(email.value === ""){
        alert("Por favor, preencha o e-mail corretamente");

    }

    
    if(senha.value === ""){
        alert("Por favor, preencha a senha corretamente");

    }

    
} )
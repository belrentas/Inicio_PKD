const form = document.getElementById("formi");
const btnCadastro = document.getElementById("btn-cadastro");
const nome = document.getElementById("name-fc");
const genero = document.getElementById("gen-fc");
const datanc = document.getElementById("dt-fc");
const cpf = document.getElementById("cpf-fc");
const rg = document.getElementById("rg-fc");
const telefone = document.getElementById("tel-fc");
const email = document.getElementById("em-fc");
const endereco = document.getElementById("end-fc");

form.addEventListener("submit", function (event){
    event.preventDefault();

    

    if(nome.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;
    }  
         
    if(genero.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;
    }
       
    if(datanc.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;
    }

    if(cpf.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;
    }

    if(rg.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;    
    }

    if(telefone.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;   
    }

    if(email.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;    
    }

    if(endereco.value === "") {
        alert("Algum campo não está preenchido, verifique novamente!")
        return;   
    }
});



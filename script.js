document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const errorMessage = document.getElementById("error-message")

//Simula credenciais validas (Não usar assim em produção)
const validUsername = "admin";
const validPassword = "123456"

if(username === validUsername && password === validPassword){
    alert("Login bem sucedido");
    //Aqui voce pode redirecionar para outra pagina
    window.location.href = "www.google.com";
}else {
    errorMessage.textContent = "Usuario ou senha incorretos."
}


})
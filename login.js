const email ="admin@email.com";
const senha = "admin";

function verificarLogin(){
  const emailInformado = document.getElementById("email").value;   
  const senhaInformada = document.getElementById("senha").value;   
  if(emailInformado === email){
alert("email informado corretamente");
if(senhaInformada=== senha){
alert("senha informada corretamente");
window.location ="home.html";
} 
alert("senha incorreta!"); } else {
    alert("email incorreto");
  }
}
function enviarMensagem(){
    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("Email").value;
    let numero = document.getElementById("numero").value;
    let tarea = document.getElementById("tarea").value;
    window.alert(nome + "\n" + email + "\n" + numero + "\n" + tarea)
    window.alert("Redirecionando para o WhatsApp...")
    let msg = document.getElementById( "tarea").value;
    msg = window.encodeURIComponent(msg);

    window.open("https://api.whatsapp.com//send?phone=phone=558195590855" + "&text=" + msg)
}
function cadastro(){
    window.alert("Cadastrado")
}

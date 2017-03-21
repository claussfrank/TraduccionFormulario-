function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember =document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder ="Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión"
}
translate();
function mostarDatos(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var titulo = document.getElementById("titulo");
  var parrafo = document.getElementById("parrafo");
  titulo.innerHTML = "Datos de  Formulario";
  parrafo.innerHTML = "<b> El correo ingresado fue: </b></br>" + email + "</br> <b> La clave que  colocaste fue:</b> </br>"+ password;
}

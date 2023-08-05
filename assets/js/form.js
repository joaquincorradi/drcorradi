function sendEmail() {
  const response = grecaptcha.getResponse();

  const body =
    "El siguiente es un mensaje enviado desde la pagina web www.doctorcorradi.com.ar <br/> <br/> <br/>" +
    "Datos del usuario: <br/> <br/>" +
    "Nombre: " +
    document.getElementById("nombre").value +
    "<br/> E-mail: " +
    document.getElementById("email").value +
    "<br/> Mensaje: " +
    document.getElementById("mensaje").value +
    "<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>";

  if (response.length === 0) {
    alert("Por favor, verifique que no es un robot.");
  } else {
    Email.send({
      SecureToken: "1f0c1ffa-b77d-46c8-b62e-1ff5b656f05f",
      To: "lucasrcorradi@gmail.com",
      From: "nuevomensajedoctorcorradi@gmail.com",
      Subject: "Nuevo mensaje de doctorcorradi.com.ar",
      Body: body,
    }).then (
      grecaptcha.reset()
    );
  }
}

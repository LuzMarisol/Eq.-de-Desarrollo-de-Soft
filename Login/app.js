function ingreso() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then(function () {
            /*verificar();*/
            console.log("Sesión iniciada");
            alert("Sesión Iniciada Correctamente")
        })
        .catch(function (error) {
            alert("Contacta con algún administrador para registrarte en el sistema. Gracias.")
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
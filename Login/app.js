function ingreso() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then(function () {
            /*verificar();*/
            console.log("Sesión iniciada");
        })
        .catch(function (error) {
            alert("Realiza tu registro para poder iniciar sesión")
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
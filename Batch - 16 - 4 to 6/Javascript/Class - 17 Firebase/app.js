
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

function register () {
    // console.log(emailEl.value, passwordEl.value);
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value);
}
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('password');
let fb = firebase.auth();

function signUp() {
    fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            console.log(userCredential);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.error(error);
        });
}


function signIn() {
    fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            console.log(user.uid);

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error);
        });
}
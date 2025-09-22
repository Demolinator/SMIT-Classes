let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let fb = firebase.auth();
const db = firebase.firestore();

function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.uid);
      localStorage.setItem("uid", user.uid)
      redirectToHome();
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
      console.log(user);
      localStorage.setItem("uid", user.uid)
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });
}

function signOut() {
  fb.signOut()
    .then(() => {
      console.log("Sign Out");
      localStorage.removeItem(user.uid)
    })
    .catch((error) => {
      // An error happened.
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    });
}

function redirectToHome() {
  location.href = "./home.html";
}


function addTodo() {
  db.collection("todos")
    .add({
      todo: "5PM Meeting",
      uid: localStorage.getItem("uid")
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}



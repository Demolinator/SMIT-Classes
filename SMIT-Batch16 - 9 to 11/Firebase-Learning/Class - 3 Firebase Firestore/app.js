// let a = 1;
// function solve () {
//     console.log(a);
//     a = 2;
// }

// solve();

let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let message = document.getElementById("message");
let fb = firebase.auth();
const db = firebase.firestore();

function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      // ...
      message.innerHTML = "user registered successfully";
      message.style.color = "green";
      redirectToTodo();
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      // ..
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signIn() {
  fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      message.innerHTML = "user registered successfully";
      message.style.color = "green";
      redirectToTodo();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signOut() {
  fb.signOut()
    .then(() => {
      // Sign-out successful.
      redirectToSignUp();
    })
    .catch((error) => {
      // An error happened.
      message.innerHTML = error;
      message.style.color = "red";
    });
}

function redirectToTodo() {
  window.location.href = "./home.html";
  localStorage.setItem("uid", JSON.stringify(fb.currentUser.uid));
}
function redirectToSignUp() {
  window.location.href = "./index.html";
}

// firebase firestore
let todos = document.getElementById("todos");
let homeMessage = document.getElementById("home-message");

function addTask() {
  db.collection("todos")
    .add({
      name: todos.value,
      uid: fb.currentUser.uid,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      homeMessage.innerHTML = "Todo Added";
      homeMessage.style.color = "green";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      homeMessage.innerHTML = error;
      homeMessage.style.color = "red";
    });
}

// function getTodoData () {
//     db.collection("todos").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, doc.data());
//     });
// });
// }

function getUserTodo() {
  var docRef = db
    .collection("todos")
    .doc(JSON.parse(localStorage.getItem("uid")));
  console.log(JSON.parse(localStorage.getItem("uid")));
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!", doc.data());
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

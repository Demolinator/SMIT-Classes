// var a = 1;
// function solve () {
//     console.log(a);
//     a = 2;
// }
// solve();// 1
// console.log(a);// 2

// Firebase Auth
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let userNameEl = document.getElementById("user-name");
let message = document.getElementById("message");
let fb = firebase.auth();
const db = firebase.firestore();

function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      //   console.log(user);
      localStorage.setItem("displayName", userNameEl.value);
      message.innerHTML = "User Created Successfully";
      message.style.color = "green";
      redirectToTodo();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
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
      //   console.log(user.uid);
      localStorage.setItem("displayName", userNameEl.value);
      message.innerHTML = "Signed in Successfully";
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
  localStorage.removeItem("displayName");
  fb.signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function redirectToTodo() {
  localStorage.setItem("uid", JSON.stringify(fb.currentUser));
  window.location.href = "./home.html";
}

// Firbase Firestore
let todosEl = document.getElementById("todos");
let userNamePlaceEl = document.getElementById("user-nameplace");

function initalLoad() {
  userNamePlaceEl.innerHTML = localStorage.getItem("displayName");
}

function addTodo() {
  db.collection("todos")
    .add({
      todo: todosEl.value,
      uid: fb.currentUser.uid, // fb = firebase.auth().currentUser.uid
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      getTodos(docRef);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function getTodos() {
  let user = JSON.parse(localStorage.getItem("uid"));
  db.collection("todos").where("uid", "==", user.uid)
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("Todos: ", change.doc.data());
                TodosDataDOM(change.doc);
            }
            // if (change.type === "modified") {
            //     console.log("Modified city: ", change.doc.data());
            // }
            // if (change.type === "removed") {
            //     console.log("Removed city: ", change.doc.data());
            // }
        });
    });
}

let divListing = document.getElementById("listing");
let todoObjId;

function TodosDataDOM (todoItem) {
    // todoItem.data();
    todoObjId = todoItem.id
    let p = document.createElement("p");
    let pTextNode = document.createTextNode(todoItem.data().todo);
    p.appendChild(pTextNode);
    divListing.appendChild(p);

    p.id = todoObjId
   console.log(p)
}
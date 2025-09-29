let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let message = document.getElementById("message");
let auth = firebase.auth();
const db = firebase.firestore();

// Authentication
function signUp() {
  auth
    .createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      redirectToHome();
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
  auth
    .signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function redirectToHome() {
  location.href = "./home.html";
  localStorage.setItem("uid", JSON.stringify(auth.currentUser));
}

// Firestore
let todosEl = document.getElementById("todos");

function addTodo() {
  db.collection("todos")
    .add({
      todo: todosEl.value,
      uid: auth.currentUser.uid,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      todosEl.value = ""
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

var unsubscribe;
function getTodos() {
  let userData = JSON.parse(localStorage.getItem("uid"));
  unsubscribe = db.collection("todos")
    .where("uid", "==", userData.uid)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // console.log("New todo: ", change.doc.data(), change.doc.id);
          makeListing(change.doc);
        }
        if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
            let editButtonRealTime = document.getElementById(change.doc.id);
            editButtonRealTime.childNodes[0].nodeValue = change.doc.data().todo;
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
          deleteFromDOM(change.doc);
        }
      });
    });
}

let divListing = document.getElementById("listing");

function makeListing(todoItem) {
  // change.doc
  let todoObject = todoItem.data();
  todoObject.id = todoItem.id;
  // console.log(todoObject);

  let p = document.createElement("p");
  let pTextNode = document.createTextNode(todoObject.todo);
  p.setAttribute("id", todoObject.id);

  let editButton = document.createElement("button");
  let editTextNode = document.createTextNode("Edit");
  editButton.appendChild(editTextNode);
  editButton.setAttribute("onClick", "UpdateTodo(this)");

  let deleteButton = document.createElement("button");
  let deleteTextNode = document.createTextNode("Delete");
  deleteButton.appendChild(deleteTextNode);
  deleteButton.setAttribute("onClick", "deleteTodo(this)");

  p.appendChild(pTextNode);
  p.appendChild(editButton);
  p.appendChild(deleteButton);
  divListing.appendChild(p);
}

function deleteTodo(toDeleteEl) {
  let toDeleteElDiv = toDeleteEl.parentNode.id;
  db.collection("todos")
    .doc(toDeleteElDiv)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

function deleteFromDOM(deleteCall) {
  // let toDeleteElDiv = toDeleteEl.parentNode.id;
  let toDeleteEl = document.getElementById(deleteCall.id);
  divListing.removeChild(toDeleteEl);
}

let addButton = document.getElementById("add-button");
let toUpdateElId;
function UpdateTodo(toUpdateEl) {
  console.log(toUpdateEl.parentNode.id);
  toUpdateElId = toUpdateEl.parentNode.id;
  let toUpdateText = toUpdateEl.parentNode.childNodes[0].nodeValue;
  todosEl.value = toUpdateText;
  addButton.innerHTML = "Save Todo";
  addButton.setAttribute("onClick", "UpdateTodoEl()");
}

function UpdateTodoEl() {
  db.collection("todos")
    .doc(toUpdateElId)
    .update({
      todo: todosEl.value
    })
    .then(() => {
      console.log("Document successfully updated!");
      todosEl.value = ""
      addButton.innerHTML = "Add Todo";
      addButton.setAttribute("onClick", "addTodo()");
      toUpdateElId = undefined;
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}


function signOut() {
  unsubscribe();
  auth
    .signOut()
    .then(() => {
      console.log("Sign Out");
      localStorage.clear();
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}
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
let auth = firebase.auth();
const db = firebase.firestore();

function signUp() {
  auth
    .createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
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
  auth
    .signInWithEmailAndPassword(emailEl.value, passwordEl.value)
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
  auth
    .signOut()
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
  localStorage.setItem("uid", JSON.stringify(auth.currentUser));
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
      uid: auth.currentUser.uid, // fb = firebase.auth().currentUser.uid
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function getTodos() {
  let user = JSON.parse(localStorage.getItem("uid"));
  db.collection("todos")
    .where("uid", "==", user.uid)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // console.log("New city: ", change.doc.data(), change.doc.id);
          TodosDataDOM(change.doc);
        }
        if (change.type === "modified") {
            // console.log("Modified city: ", change.doc.data());
            updateTodoFromDom(change.doc);
        }
        if (change.type === "removed") {
          // console.log("Removed city: ", change.doc.data());
          deleteFromDom(change.doc);
        }
      });
    });
}

let divListing = document.getElementById("listing");

function TodosDataDOM(todoItem) {
  let todoObject = todoItem.data(); //  {todo: todo, uid: uid}
  todoObject.id = todoItem.id; //  {id: docid todo: todo, uid: uid}
  let p = document.createElement("p");
  let pTextNode = document.createTextNode(todoObject.todo);
  p.setAttribute("id", todoObject.id);

  let editButton = document.createElement("button");
  let editButtonText = document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  editButton.setAttribute("onClick", "editTodo(this)");

  let deleteButton = document.createElement("button");
  let deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  deleteButton.setAttribute("onClick", "deleteTodo(this)");

  p.appendChild(pTextNode);
  p.appendChild(editButton);
  p.appendChild(deleteButton);
  divListing.appendChild(p);
}

function deleteTodo(deleteEl) {
  let docId = deleteEl.parentNode.id;
  db.collection("todos")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

function deleteFromDom(deletedTodo) {
  let toDeleteEl = document.getElementById(deletedTodo.id);
  divListing.removeChild(toDeleteEl);
}

let addTodoButton = document.getElementById("add-todo");
let editDocId;

function editTodo(editTodoButton) {
  // console.log(editTodoButton.parentNode);
  editDocId = editTodoButton.parentNode.id;
  todosEl.value = editTodoButton.parentNode.childNodes[0].nodeValue;
  addTodoButton.innerHTML = "Save Todo";
  addTodoButton.setAttribute("onClick", "updateTodo()");
}

function updateTodo() {
  db.collection("todos")
    .doc(editDocId)
    .update({
      todo: todosEl.value,
    })
    .then(() => {
      console.log("Document successfully updated!");
      todosEl.value = "";
      addTodoButton.innerHTML = "Add Todo";
      addTodoButton.setAttribute("onClick", "addTodo()");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}


function updateTodoFromDom (updateTodoObj) { // change.doc.data()
  console.log(updateTodoObj.id)
  let updatedTodoEl = document.getElementById(updateTodoObj.id);
  updatedTodoEl.childNodes[0].nodeValue = updateTodoObj.data().todo 
}
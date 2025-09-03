/*
create an h1 that has the text Shopping Cart
then create an input and a button with the text Add
then create a ul
after that check if user has left the input empty at the time of triggering the event 
and else create a li and then show it in the ul
*/

let userInput = document.getElementById("user-input");
let message = document.getElementById("message");
let addButton = document.getElementById("add-button");
let ul = document.childNodes[1].childNodes[2].childNodes[11]

let editItemButton;

function add() {
    if (userInput.value === "") {
        message.innerHTML = "Input field empty!";
        message.style.color = "red";
    }
    else {
        let li = document.createElement("li");
        let liTextNode = document.createTextNode(userInput.value);

        let deleteButton = document.createElement("button");
        let deleteButtonTextNode = document.createTextNode("Delete");
        deleteButton.appendChild(deleteButtonTextNode);
        deleteButton.setAttribute("onClick", "deleteItem(this)");

        let editButton = document.createElement("button");
        let editButtonTextNode = document.createTextNode("Edit");
        editButton.appendChild(editButtonTextNode);
        editButton.setAttribute("onClick", "ediItem(this)");


        li.appendChild(liTextNode);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
        userInput.value = ""
        deleteButton.style.margin = "0px 12px"
        deleteButton.style.borderRadius = "9999px"
        deleteButton.style.border = "none"
        deleteButton.style.color = "white"
        deleteButton.style.backgroundColor = "red"


        editButton.style.borderRadius = "9999px"
        editButton.style.color = "white"
        editButton.style.border = "none"
        editButton.style.backgroundColor = "green"
    }
}

function deleteItem(targetEl) {
    let li = targetEl.parentNode;
    let ulEl = targetEl.parentNode.parentNode;
    ulEl.removeChild(li);
}

function ediItem(targetEl) {
    console.log(targetEl.previousSibling.previousSibling)
    let listText = targetEl.previousSibling.previousSibling.nodeValue
    userInput.value = listText;
    addButton.innerHTML = "Save";
    addButton.setAttribute("onCLick", "updateItem()")
    editItemButton = targetEl;
}

function updateItem() {
    editItemButton.previousSibling.previousSibling.nodeValue = userInput.value;
    userInput.value = "";
    addButton.innerHTML = "Add";
    addButton.setAttribute("onCLick", "add()")
    editItemButton = undefined;
}
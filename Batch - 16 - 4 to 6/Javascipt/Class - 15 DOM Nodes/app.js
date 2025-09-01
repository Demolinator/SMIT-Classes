/*
create an h1 that has the text Shopping Cart
then create an input and a button with the text Add
then create a ul
after that check if user has left the input empty at the time of triggering the event 
and else create a li and then show it in the ul
*/

/*

Add update functionality using an save button change the button to save when clicked on edit and then when clicked on saved the text should be updated in the dom list.

*/

// console.log(document.childNodes[1].childNodes[2].childNodes[11]);
// let userInput = document.getElementById("user-input");
// let message = document.getElementById("message");
// let ulEl = document.childNodes[1].childNodes[2].childNodes[11];

// function add () {
//     if (userInput.value === "") {
//         message.innerHTML = "input field empty!"
//         message.style.color = "red" 
//     } else {
//         let li = document.createElement("li");
//         let userTextNode = document.createTextNode(userInput.value);

//         let deleteButton = document.createElement("button");
//         let deleteButtonTextNode = document.createTextNode("Delete");
//         deleteButton.setAttribute("onClick", "removeItem(this)");

//         let editButton = document.createElement("button");
//         let editButtonTextNode = document.createTextNode("Edit");
//         editButton.setAttribute("onClick", "removeItem(this)");

//         deleteButton.appendChild(deleteButtonTextNode);
//         editButton.appendChild(editButtonTextNode);


//         li.appendChild(userTextNode);
//         li.appendChild(deleteButton)
//         li.appendChild(editButton)
//         ulEl.appendChild(li);
        
        
//         userInput.value = "";
//     }
// }

// function removeItem (targetEl) {
//     let li = targetEl.parentNode;
//     let ul = targetEl.parentNode.parentNode;
//     ul.removeChild(li);
// }


// CRUD
// Create, Read, Update, Delete







// let div2 = document.getElementById("div-2");
// let special = document.getElementById("special"); // p

// console.log(div2.firstChild);
// console.log(div2.lastChild);

// console.log(special.nextSibling);
// console.log(special.previousSibling);

// console.log(special.parentNode.parentNode);
// let removeEl = special.nextSibling.nextSibling;


// div2.removeChild(removeEl);
// let removeEl2 = div2.lastChild.previousSibling;

// div2.removeChild(removeEl2);


// console.log(div2.hasAttribute("title"));
// console.log(div2.getAttribute("id"));
// console.log(div2.setAttribute("title", "This is a attribute set from js"));

// let button = document.createElement("button");
// let buttonTextNode = document.createTextNode("Save");

// button.appendChild(buttonTextNode);

// div2.insertBefore(button, special); 
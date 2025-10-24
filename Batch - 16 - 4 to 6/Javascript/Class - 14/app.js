// let h1El = document.childNodes[1].childNodes[2].childNodes[1].childNodes[0];
// console.log(h1El.nodeName);// <em></em> = EM
// console.log(h1El.nodeType);// 1 aur 3
// console.log(h1El.nodeValue = "Talal Ahmed");// "This is a para".innerHTML X


// let h1El = document.childNodes[1].childNodes[2].childNodes[3].childNodes;// [text, p, text, p]
// let pCounter = 0;
 
// console.log(h1El);
// for (let i = 0; i < h1El.length; i++) {
//     if (h1El[i].nodeType === 1) {
//         pCounter++
//     }
//     if (pCounter === 1) {
//         h1El[i].innerHTML = "This is a para from js" + i;
//     }
// }

// // console.log(h1El);



// let h1El = document.getElementById("special");
// console.log(h1El.innerHTML = "<p>This is from js</p>");

// let bodyEl = document.childNodes[1].childNodes[2]; <body></body>
// let pEl = document.createElement("p"); <p></p>
// let pText = document.createTextNode("This is from js")
// pEl.appendChild(pText)
// bodyEl.appendChild(pEl);




/*

create an h1 that has the text Shopping Cart
then create an input and a button with the text Add
then create a ul
after that check if user has left the input empty at the time of triggering the event 
and else create a li and then show it in the ul

*/

// let userText = document.getElementById("user-text");
// let message = document.getElementById("message");
// let bodyEl = document.childNodes[1].childNodes[2].childNodes[11];


// function add () {
//     if (userText.value === "") {
//         message.innerHTML = "Empty input"
//     } else {

//     }
// }
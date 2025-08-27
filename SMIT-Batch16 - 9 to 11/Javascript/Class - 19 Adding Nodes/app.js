

// let h1 = document.createElement("h1");

// let para = document.createTextNode("This is a paragraph");

// h1.appendChild(para);


// let bodyEl = document.childNodes[1].childNodes[2];

// bodyEl.appendChild(h1);





/* 
    <p>
        This is
        <em>Important</em>
        !
    </p>
*/


// let bodyEl = document.childNodes[1].childNodes[2];
// let p = document.createElement("p");

// let firstText = document.createTextNode("This is ");
// let lastText = document.createTextNode(" !");

// let em = document.createElement("em");
// let middleText = document.createTextNode("Important");
// em.appendChild(middleText);

// p.appendChild(firstText)
// p.appendChild(em)
// p.appendChild(lastText)

// bodyEl.appendChild(p);

// console.log(p)
















/* 

h1 Shopping Cart
input create a button with the input with the name Add
create a ul
check if the user has left the input field empty show error
whatever is in the input add it to the ul

*/

// let input = document.getElementById("input");
// let msgEl = document.getElementById("message");
// let ul = document.childNodes[1].childNodes[2].childNodes[9]

// function add(){
//     if(input.value === ""){
//         msgEl.innerHTML = "input is empty";
//         msgEl.style.color = "red";
//     }else {
//         let li = document.createElement("li");
//         let text = document.createTextNode(input.value)

//         let button = document.createElement("button")
//         let buttonText = document.createTextNode("Delete");

//         button.appendChild(buttonText);
//         li.appendChild(text);
//         li.appendChild(button);
//         ul.appendChild(li);
//     }
// }


// remove 
// EventFire



// let h1 = document.getElementById("heading");
// h1.hasAttribute("class")
// h1.getAttribute("title")
// h1.setAttribute("onClick", "alert('This is a heading')")
// console.log();
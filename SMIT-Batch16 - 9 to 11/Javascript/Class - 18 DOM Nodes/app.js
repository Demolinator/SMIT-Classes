/* 
    childNodes []

    nodeType element 1
    nodeType Text 3

    nodeName <em></em> EM P

    nodeValue Important
    p This is a para
*/

// console.log(document.childNodes[1].childNodes[2].childNodes[7].childNodes[1].nodeName);


// let nodeEL = document.childNodes[1].childNodes[2].childNodes[5];
// let pCounter = 0;
// console.log(nodeEL.lastChild.previousSibling)

// for (let i = 0; i < nodeEL.length; i++) {
//     // if(nodeEL[i].nodeType === 1) {
//     //     nodeEL[i].innerHTML = "This is a para from js" + i; 
//     // }

//     if(nodeEL[i].nodeType === 1) {
//         pCounter++; 
//     }

//     if (pCounter === 3) {
//         nodeEL[i].innerHTML = "This is a para from js" + i;
//     }
// }

// let paraEl = nodeEL.innerHTML = "This is a para from js";

// console.log(nodeEL);    

// console.log("Hello\nWorld");


// let nodeEL = document.childNodes[1].childNodes[1].childNodes[13].childNodes[1];
// // console.log(nodeEL.nodeValue = ".");
// console.log(nodeEL.nodeName);
// console.log(nodeEL);
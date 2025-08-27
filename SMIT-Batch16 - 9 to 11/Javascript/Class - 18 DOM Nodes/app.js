/* 
    childNodes []

    nodeType element 1
    nodeType Text 3

    nodeName <em></em> EM P

    nodeValue Important
    p This is a para
*/



// let nodeEL = document.childNodes[1].childNodes[1].childNodes[11].childNodes;
// let pCounter = 0;

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


let nodeEL = document.childNodes[1].childNodes[1].childNodes[13].childNodes[1];
// console.log(nodeEL.nodeValue = ".");
console.log(nodeEL.nodeName);
console.log(nodeEL);
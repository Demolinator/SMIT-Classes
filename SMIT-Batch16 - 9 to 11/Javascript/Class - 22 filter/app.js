// filter list

// let filterText = document.getElementById("filter-text");
// let listing = document.getElementById("listing"); // ul

// function filterList () {
//     let listingText = listing.childNodes; // [li, #text]
//     for (let i = 0; i < listingText.length; i++) {
//         if (listingText[i].nodeType === 1) { // [li, li, li]
//             // console.log(listingText[i].innerHTML);
//             if (listingText[i].innerHTML.toLowerCase().indexOf(filterText.value.toLowerCase()) !== -1) { // [karachi]
//                 listingText[i].style.display = "block";
//             }
//             else {
//                 listingText[i].style.display = "none";
//             }
//         }
//     }
// }

// filter div

let container = document.getElementById("container");
function filterSelection(Items) {
  let containerJun = container.childNodes;// [div #text div]
  for (let i = 0; i < containerJun.length; i++) {
    if (containerJun[i].nodeType === 1) {// [div div]
    //   console.log(containerJun[i].className.indexOf(Items));
      if (containerJun[i].className.indexOf(Items) !== -1) {
        containerJun[i].style.display = "block";
      } else {
        containerJun[i].style.display = "none";
      }
      // (containerJun[i].className)
    }
  }
}

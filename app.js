// function toggleShowBox() {
//   console.log("clicked");
//   var showbox = document.getElementById("showbox");
//   showbox.classList.toggle("visible");

//   if (showbox.classList.contains("visible")) {
//     // If showbox is visible, add sticky styles
//     showbox.style.position = "fixed";
//     showbox.style.top = "100px"; // Adjust this value as needed
//   } else {
//     // If showbox is not visible, reset position
//     showbox.style.position = "static";
//     showbox.style.top = "auto";
//   }
// }
// function toggleShowBox() {
//   console.log("clicked");
//   var showbox = document.getElementById("showbox");
//   showbox.classList.toggle("visible");
// }

function toggleShowBox() {
  console.log("clicked");
  var showbox = document.getElementById("showbox");
  if (showbox) {
    showbox.classList.toggle("visible");
  } else {
    console.error("Element with ID 'showbox' not found.");
  }
}

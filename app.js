const panels = document.querySelectorAll(".panel");
// for (let panel of panels) {
//   console.log(panel);
// }

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //when we clicked its gonna remove all the active classes
    panel.classList.add("active"); //and gonna put the active class on the one we click
    // alert("you clicked");
    // console.log(123);
  });

  //console.log(panel);
});

function removeActiveClasses() {
  for (let panel of panels) {
    panel.classList.remove("active");
  }
}

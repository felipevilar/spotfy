function myFunction() {
  console.log("myfuncion: ");
  let el = document.getElementById("menuNav");

  if (document.getElementsByClassName("test").length) {
    console.log("Entrou1");
    el.classList.remove("test");
  } else {
    console.log("Entrou else");
    el.style.display = "flex"
    el.classList.add("test");
  }
}

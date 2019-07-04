function updateHeading(newHeading) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = newHeading;
}

function handleSubmit(event) {
  event.preventDefault();

  let input = document.querySelector("#name");
  updateHeading(`Welcome, ${input.value}!!!! 👩‍💻`);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function alerta() {
  alert;
}

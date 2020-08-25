const weahterForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading...";
messageTwo.textContent = "";

weahterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  console.log(location);

  fetch("http://localhost:3000/weather?address=" + location) //eslint-disable-line
    .then((response) => response.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
        messageOne.textContent = res.error;
      } else {
        messageOne.textContent = res.location;
        messageTwo.textContent = res.temperature;
      }
    });
});

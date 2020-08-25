const weahterForm = document.querySelector("form");
const search = document.querySelector("input");

weahterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  console.log(location);

  fetch("http://localhost:3000/weather?address=" + location) //eslint-disable-line
    .then((response) => response.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        console.log(res);
      }
    });
});

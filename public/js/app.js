fetch(`http://localhost:3000/weather?address=boston`) //eslint-disable-line
  .then((response) => response.json())
  .then((res) => {
    if (res.error) {
      console.log(res.error);
    } else {
      console.log(res);
    }
  });

fetch('http://127.0.0.1:3000/')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

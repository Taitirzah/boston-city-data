fetch("https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json")
  .then((response) => response.json())
  .then((bostonData) => {
    console.log("Data loaded:", bostonData);

    // You will add more here soon
  });

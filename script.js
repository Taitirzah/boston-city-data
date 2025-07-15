fetch("https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json")
  .then((response) => response.json())
  .then((json) => {
    const bostonData = json.data;

    // Count over $100K earners
    const over100k = bostonData.filter((employee) =>
      parseFloat(employee[18]) > 100000
    );

    const countElement = document.getElementById("over100k-count");
    countElement.textContent = `Number of people earning over $100,000: ${over100k.length}`;

    // Sort & grab top 5
    const sorted = bostonData.sort((a, b) =>
      parseFloat(b[18]) - parseFloat(a[18])
    );

    const top5 = sorted.slice(0, 5);
    const list = document.getElementById("top-earners");

    // Create <li> items for top 5 earners
    top5.forEach((employee) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${employee[8]}: $${Number(employee[18]).toLocaleString()}`;
      list.appendChild(listItem);
    });
  });

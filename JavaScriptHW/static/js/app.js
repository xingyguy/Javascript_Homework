// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(dateValue => dateValue.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((dataValue) => {
    var row = tbody.append("tr");
    Object.entries(dataValue).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});


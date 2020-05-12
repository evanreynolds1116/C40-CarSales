// Practice: Car Sales
// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

// Here's your first data structure for the sales made last week. You will need to start off by iterating the array of sales with a forEach() method. Then iterate the entries of the vehicle property of each sale.
import salesByWeek from "./report.js"

const salesReports = document.querySelector("#reports")

salesReports.innerHTML += `
<h1>Sales Report</h1>
<hr>
<section id="report"></section>
`;

salesByWeek.forEach(sale => {
  report.innerHTML += `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
  for (const entry of Object.entries(sale.vehicle)) {
    report.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
  }
  report.innerHTML += `<h3>Profit: ${sale.gross_profit}</h3>
  <hr>`

})
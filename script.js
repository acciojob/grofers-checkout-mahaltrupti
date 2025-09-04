// script.js
// script.js

window.addEventListener("DOMContentLoaded", () => {
  // Get all the price elements
  const priceCells = document.querySelectorAll(".prices");

  let total = 0;

  // Loop through and calculate sum
  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Get the table (assuming only one grocery table exists)
  const table = document.querySelector("table");

  // Create a new row
  const totalRow = document.createElement("tr");

  // Create a single cell spanning full width
  const totalCell = document.createElement("td");
  totalCell.colSpan = table.rows[0].cells.length;  // span across all columns
  totalCell.textContent = `Total Price: ${total.toFixed(2)}`;

  // Append the cell to the row, and the row to the table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});




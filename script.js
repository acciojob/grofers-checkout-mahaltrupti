// script.js

window.onload = function () {
    // Select all price elements
    const priceElements = document.querySelectorAll(".prices");

    let total = 0;

    // Loop through prices and add them up
    priceElements.forEach(priceEl => {
        // Convert text to number (remove any extra spaces)
        let value = parseFloat(priceEl.textContent.trim());
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Get the table element (assuming it contains the items and prices)
    const table = document.querySelector("table");

    if (table) {
        // Create a new row
        const totalRow = document.createElement("tr");

        // Create a new cell spanning across columns
        const totalCell = document.createElement("td");
        totalCell.setAttribute("colspan", "2"); // adjust based on table structure
        totalCell.textContent = "Total Price: " + total.toFixed(2);

        // Append cell to row
        totalRow.appendChild(totalCell);

        // Append row to table
        table.appendChild(totalRow);
    }
};



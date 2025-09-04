// script.js

// script.js
window.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  if (!table) return;

  // Select price cells from data rows (avoid header <th>)
  const priceCells = table.querySelectorAll('tbody td.prices, td.prices');

  let total = 0;
  priceCells.forEach(cell => {
    // Remove currency symbols, commas, spaces etc.
    const num = Number(cell.textContent.trim().replace(/[^\d.-]/g, ''));
    if (!Number.isNaN(num)) total += num;
  });

  // Remove previous total row if present (prevents duplicates)
  const existing = table.querySelector('tr[data-total-row="true"]');
  if (existing) existing.remove();

  // Determine how many columns to span
  const firstRow = table.rows[0];
  const colCount = firstRow ? firstRow.cells.length : 1;

  // Create the total row with a single cell
  const tr = document.createElement('tr');
  tr.setAttribute('data-total-row', 'true');

  const td = document.createElement('td');
  td.colSpan = colCount;               // single cell spanning all columns
  td.textContent = `Total Price: ${total.toFixed(2)}`;

  tr.appendChild(td);

  // Append to tbody if it exists; otherwise to the table
  if (table.tBodies && table.tBodies.length) {
    table.tBodies[0].appendChild(tr);
  } else {
    table.appendChild(tr);
  }
});




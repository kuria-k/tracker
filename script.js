document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("expense-form");
  const categoryInput = document.getElementById("category");
  const amountInput = document.getElementById("amount");
  const dateInput = document.getElementById("date");
  const descriptionInput = document.getElementById("description");
  const tableBody = document.querySelector("table tbody");

  let totalBalance = 0;

  // Create a balance display
  const balanceDisplay = document.createElement("p");
  balanceDisplay.className = "text-xl font-bold mt-4";
  balanceDisplay.textContent = `Total Balance: KES ${totalBalance}`;
  document.body.insertBefore(balanceDisplay, form.nextSibling);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const category = categoryInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;
    const description = descriptionInput.value;
    
    // code validation
    if (category === "select" || isNaN(amount) || !date || description === "select") {
      alert("Please fill in all fields correctly.");
      return;
    }

    const row = document.createElement("tr");

    // Category
    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    categoryCell.className = "text-gray-900 font-bold text-xl"
    row.appendChild(categoryCell);

    // Amount
    const amountCell = document.createElement("td");
    amountCell.textContent = `KES ${amount.toFixed(2)}`;
    amountCell.className = "text-xl"
    amountCell.style.color = description === "income" ? "green" : "red";
    row.appendChild(amountCell);

    // Date
    const dateCell = document.createElement("td");
    dateCell.textContent = date;
    dateCell.className = "text-xl"
    row.appendChild(dateCell);

    // Action of deleting
    const actionCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className =
      "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700";
    deleteBtn.addEventListener("click", () => {
      tableBody.removeChild(row);
      totalBalance -= description === "income" ? amount : -amount;
      updateBalance();
    });
    actionCell.appendChild(deleteBtn);
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    // Update balance
    totalBalance += description === "income" ? amount : -amount;
    updateBalance();

    // Clear form
    form.reset();
  });

  function updateBalance() {
    balanceDisplay.textContent = `Total Balance: KES ${totalBalance.toFixed(
      2
    )}`;
    balanceDisplay.style.color = totalBalance >= 0 ? "green" : "red";
  }
});

document.cookie = "username=budget-tracker; expires=SAT, 30 AUG 2025 12:00:00 UTC";

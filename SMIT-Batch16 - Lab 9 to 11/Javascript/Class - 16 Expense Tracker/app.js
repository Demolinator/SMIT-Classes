let budget = parseFloat(localStorage.getItem("budget")) || 0;
let expense = JSON.parse(localStorage.getItem("expense")) || [];


displayBudget();
displayExpense();


function setBudget () {
    let input = document.getElementById("Budget").value;

    if (input <= 0) {
        alert("Enter a valid budget above zero.");
        return;
    }

    budget = parseFloat(input);
    localStorage.setItem("budget", budget);
    displayBudget();
    displayExpense();
}


function displayBudget () {
    document.getElementById("budget-amount").innerHTML = "Your Budget: " + budget;
}


function addExpense () {
    let name = document.getElementById("Expense-name").value;
    let amount = document.getElementById("Expense-amount").value;

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Enter a valid expense.")
        return;
    }

    expense.push({name, amount});
    localStorage.setItem("expense", JSON.stringify(expense))
    document.getElementById("Expense-name").value = "";
    document.getElementById("Expense-amount").value = "";
    displayExpense();
}

function displayExpense () {
    let list = document.getElementById("Expense-list");
    list.innerHTML= "";

    let totalSpent = 0;
    for (let i = 0; i < expense.length; i++) {
        totalSpent += parseFloat(expense[i].amount);

        let li = document.createElement("li");
        li.textContent = expense[i].name + " and the amount spent is: " + expense[i].amount;
        list.appendChild(li);
    }

    let remaining = budget - totalSpent

    let summary = document.getElementById("summary");
    summary.textContent = "your remainig Budget is: " + remaining;
}
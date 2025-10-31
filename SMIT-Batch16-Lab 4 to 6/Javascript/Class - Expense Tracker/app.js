let budget = parseFloat(localStorage.getItem("budget")) 
|| 0;
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayBudget();
displayExpense();

function setBudget () {
    let input = document.getElementById("budget").value;

    if (input <= 0) {
        alert("Enter a valid budget.");
        return;
    }

    budget = parseFloat(input);
    localStorage.setItem("budget", budget);
    displayBudget();
    displayExpense();
}

function displayBudget () {
    let budgetEl = document.getElementById("budget-amount");
    budgetEl.innerHTML = "Your Budget: " + budget;
}

function setExpense () {
    let expenseName = document.getElementById("expense-name").value;
    let expenseAmount = document.getElementById("expense-amount").value;

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("Enter a valid expense.")
        return;
    }

    expenses.push({expenseName, expenseAmount});
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpense();
}

function displayExpense () {
    let expenseListEl = document.getElementById("expense-list");
    expenseListEl.innerHTML = "";
    
    let totalSpent = 0;
    for (let i = 0; i < expenses.length; i++) {
        console.log(expenses[i])
        
        let li = document.createElement("li");
        let liText = document.createTextNode(expenses[i].expenseName + " and the amount is: " + expenses[i].expenseAmount)
        li.appendChild(liText);
        expenseListEl.appendChild(li);    

        totalSpent += parseFloat(expenses[i].expenseAmount);
    }
    let remaining = budget - totalSpent;
    console.log(remaining);

    let summary=document.getElementById("summary")
    summary.innerHTML=`Total Budget= ${budget}
    Remaining budget ${remaining}
    Total Expense ${totalSpent}`
}
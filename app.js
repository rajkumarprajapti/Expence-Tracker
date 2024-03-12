const expenseForm = document.getElementById('expense-form');
  const expenseNameInput = document.getElementById('expense-name');
  const expenseAmountInput = document.getElementById('expense-amount');
  const expensesList = document.getElementById('expenses-list');
  const totalExpenses = document.getElementById('total-expenses');

  let total = 0;

  expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);
    
    if (name && amount) {
      addExpense(name, amount);
      updateTotal();
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
    } else {
      alert('Please enter both expense name and amount.');
    }
  });

  function addExpense(name, amount) {
    const li = document.createElement('li');
    li.textContent = `${name}: $${amount.toFixed(2)}`;
    expensesList.appendChild(li);
    total += amount;
  }

  function updateTotal() {
    totalExpenses.textContent = `Total: $${total.toFixed(2)}`;
  }
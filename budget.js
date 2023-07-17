function calculateBudget() {
    // Get the input value
    var salary = parseFloat(document.getElementById("salary").value);

    // Calculate the budget amounts
    var fixedExpenses = salary * 0.65;
    var investments = salary * 0.10;
    var goWild = salary * 0.15;
    var savings = salary * 0.10;

    // Display the results
    document.getElementById("fixedExpenses").textContent = fixedExpenses.toFixed(2);
    document.getElementById("investments").textContent = investments.toFixed(2);
    document.getElementById("goWild").textContent = goWild.toFixed(2);
    document.getElementById("savings").textContent = savings.toFixed(2);
  }

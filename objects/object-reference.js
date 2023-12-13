let myAccount = {
    name: 'Valentina',
    expenses: 0,
    income: 0
};

// addIncome (account, income)

let addIncome = function(account, income){
    account.income += income;
}

// addExpense (account amount)

let addExpense = function(account, amount){
    account.expenses += amount;
}

// resetAccount expenses and income = 0 (account)

let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0
}

// getAccountSummary prints balance and income

let getAccountSummary = function (account){
    let balance = account.income - account.expenses;
    return 'Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses.'; 
}

addIncome(myAccount, 200);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
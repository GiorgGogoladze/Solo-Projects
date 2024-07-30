function transferFunds() {
    var balanceElement = document.getElementById('balance');
    var amountElement = document.getElementById('amount');
    var recipientElement = document.getElementById('recipient');
    var transferMessageElement = document.getElementById('transfer-message');
    
    var balance = parseFloat(balanceElement.textContent);
    var amount = parseFloat(amountElement.value);
    var recipient = recipientElement.value;
    
    if (isNaN(amount) || amount <= 0) {
        transferMessageElement.textContent = 'Please enter a valid amount.';
        transferMessageElement.style.color = 'red';
        return;
    }
    
    if (amount > balance) {
        transferMessageElement.textContent = 'Insufficient balance.';
        transferMessageElement.style.color = 'red';
        return;
    }
    
    if (recipient.trim() === '') {
        transferMessageElement.textContent = 'Please enter a recipient name.';
        transferMessageElement.style.color = 'red';
        return;
    }
    
    balance -= amount;
    balanceElement.textContent = balance.toFixed(2);
    
    transferMessageElement.textContent = `Transferred $${amount.toFixed(2)} to ${recipient}.`;
    transferMessageElement.style.color = 'green';
    
    // Clear the form
    amountElement.value = '';
    recipientElement.value = '';
}

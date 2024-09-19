// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function (event) {

    event.preventDefault();
    // get money to be added to the account 
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney)
    // get the pin number provided
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)


    // verify the pin number 
    // wrong way to valid pin number 
    if (pinNumber === '1234') {
        console.log('adding money to your acount');
        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        
        // add addmoney with balance 
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // update the balance in the UI/DOM 
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money! please try again')
    }
})
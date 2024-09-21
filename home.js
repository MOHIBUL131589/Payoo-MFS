// // add money to the account

// document.getElementById('btn-add-money').addEventListener('click', function (event) {

//     event.preventDefault();
//     // get money to be added to the account 
//     const addMoney = document.getElementById('input-add-money').value;
//     console.log(addMoney)
//     // get the pin number provided
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(pinNumber)


//     // verify the pin number 
//     // wrong way to valid pin number 
//     if (pinNumber === '1234') {
//         console.log('adding money to your acount');
//         // get the current balance
//         const balance = document.getElementById('account-balance').innerText;
//         console.log(balance);

//         // add addmoney with balance 
//         const addMoneyNumber = parseFloat(addMoney);
//         const balanceNumber = parseFloat(balance);
//         const newBalance = balanceNumber + addMoneyNumber;
//         console.log(newBalance);

//         // update the balance in the UI/DOM 
//         document.getElementById('account-balance').innerText = newBalance;

//     }
//     else {
//         alert('Failed to add money! please try again')
//     }
// })

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyNumber = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('pin-number');

    if(isNaN(addMoneyNumber)){
        alert('Failed to add money.');
        return;
    }

    if (pinNumber === 1234) {
        const accountBalance = getTextFieldValueById('account-balance');
        const balance = accountBalance + addMoneyNumber;

        document.getElementById('account-balance').innerText = balance;

        // add to the transaction history 
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoneyNumber} Tk. New Balance: ${balance}`
        console.log(p)


        // should be a common function 
        document.getElementById('transaction-container').appendChild(p);
    } 
    else{
        alert('payment cant be processed');
    }



})



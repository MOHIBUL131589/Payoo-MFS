

// document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
//     event.preventDefault();

//     const cashOutMoney = document.getElementById('input-cash-out-money').value;
//     console.log(cashOutMoney);
//     const pinNumber = document.getElementById('pin-cash-out-number').value;
//     console.log(pinNumber);

//     if(pinNumber === '1234'){

//         const balance = document.getElementById('account-balance').innerText;
//         console.log(balance);

//         const cashOutMoneyNum = parseFloat(cashOutMoney);
//         const balanceNum = parseFloat(balance);
//         const newBalance = balanceNum - cashOutMoneyNum;
//         console.log(newBalance);

//         document.getElementById('account-balance').innerText = newBalance;

//     } 
//     else {
//         alert('cash out failed.')
//     }
// })


document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById('input-cash-out-money');
    const pinCashOutMoney = getInputFieldValueById('pin-cash-out-number');

    if(isNaN(cashOutMoney)){
        alert('Failed to cash out');
        return;
    }

    if(pinCashOutMoney === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutMoney;
        
        if(cashOutMoney > balance){
            alert('You do not have sufficient balance');
            return;
        }


        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history 
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl"> Cash Out </h4>
            <p>${cashOutMoney} Withdraw. New Balance ${newBalance}</p>

        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('cashout failed.')
    }
})

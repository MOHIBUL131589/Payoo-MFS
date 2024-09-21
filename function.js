document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        console.log('cash out btn clicked');
        showSectionById('cash-out-swap');
    })

document.getElementById('add-money-btn').addEventListener('click', function(){
    console.log('add money btn clicked');
    showSectionById('add-money-swap');
})

document.getElementById('transaction-btn').addEventListener('click', function(){
    console.log('transaction btn clicked');
    showSectionById('transaction-section');
})


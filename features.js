// Swap add money to cash out 
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-swap').classList.remove('hidden');
    document.getElementById('add-money-swap').classList.add('hidden');

})


// swap cash out to add money 
document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-swap').classList.remove('hidden');
    document.getElementById('cash-out-swap').classList.add('hidden');
})

// step-1: set event handler
// document.getElementById('btn-login')
// .addEventListener('click',function(event){
    // step-2: prevent default behavior (prevent reloading brower)
    // event.preventDefault();


    // get the phone number 
    // const phoneNumber = document.getElementById('phone-number').value;
    // const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // this is temporary. you shouldn't do like this 
    // if(phoneNumber === '5' && pinNumber === '1234') {
    //     console.log('you are logged in');
    // step:5 allow user to use website 
//     }
//     else {
//         alert('Wrong phone number or pin');
//     }
// })


document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const  pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '4'){
        console.log('you are logged in');
        window.location.href = '/home.html'
    } else{
        alert("wrong number or pin")
    }

})
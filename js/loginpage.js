document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault();
    const number = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    if(number === '01644886566' && pin === 'abir2247'){
        window.location.href='/homepage.html'

    }
    else{
        alert('Invaid Phone number or pin , please try again')
    }
    
});
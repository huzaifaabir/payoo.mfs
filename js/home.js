document.getElementById('log-out').addEventListener('click',function(){
    window.location.href='/index.html';
})

document.getElementById('add').addEventListener('click',function(event){
    event.preventDefault();
    const form = document.getElementById('form-section');
    form.classList.remove('hidden');

})
document.getElementById('amount').addEventListener('keyup',function(event){
        const eventAmount = event.target.value;
        if(/[a-z]/.test(eventAmount)){
            alert('Invalid Amount')
        }
    })
document.getElementById('add-button').addEventListener('click', function(e){
    e.preventDefault();
    const pin = document.getElementById('pin').value;
    if( pin === "abir2247"){
    const amount = document.getElementById('balance');
    const balance = amount.innerText;
    const balanceFloat = parseFloat(balance);
    const addMoney = document.getElementById('amount').value;
    const moneyFloat = parseFloat(addMoney);
    const totalAmount = balanceFloat + moneyFloat;
    amount.innerHTML = totalAmount;
}
    else{
        alert('Wrong Pin , Try again')
    }

})
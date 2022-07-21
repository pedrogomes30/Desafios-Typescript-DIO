let btUpdate       = document.getElementById('atualizar-saldo');
let btClear        = document.getElementById('limpar-saldo');
let inputSum       = document.getElementById('soma') as HTMLInputElement;
let inputBalance   = document.getElementById('campo-saldo');

let total = 0

clearBalance();

function sumToBalance(sum:number) {
    if(inputBalance){
        total += sum
        inputBalance.innerHTML = total.toString();
        clearInputSum();
    }
}
function clearInputSum(){
    inputSum.value = ''
}

function clearBalance() {
    if(inputBalance){
        total = 0
        inputBalance.innerHTML= total.toString()
    }
}

btUpdate?.addEventListener('click', function () {
    sumToBalance(Number(inputSum.value));
});

btClear?.addEventListener('click', function () {
    clearBalance();
});

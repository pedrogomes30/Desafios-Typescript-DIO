"use strict";
let btUpdate = document.getElementById('atualizar-saldo');
let btClear = document.getElementById('limpar-saldo');
let inputSum = document.getElementById('soma');
let inputBalance = document.getElementById('campo-saldo');
let total = 0;
clearBalance();
function sumToBalance(sum) {
    if (inputBalance) {
        total += sum;
        inputBalance.innerHTML = total.toString();
        clearInputSum();
    }
}
function clearInputSum() {
    inputSum.value = '';
}
function clearBalance() {
    if (inputBalance) {
        total = 0;
        inputBalance.innerHTML = total.toString();
    }
}
btUpdate === null || btUpdate === void 0 ? void 0 : btUpdate.addEventListener('click', function () {
    sumToBalance(Number(inputSum.value));
});
btClear === null || btClear === void 0 ? void 0 : btClear.addEventListener('click', function () {
    clearBalance();
});

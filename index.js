//memory update
function memoryFunction(value) {
    document.getElementById("memory-total").value = 180;
    document.getElementById("cost-total").innerText = 1299 + 180;
    const newTotal = document.getElementById("total").innerText = 1299 + 180;
}
//storage update
function storageFunction(value) {
    document.getElementById("storage-total").value = 100;
    const newAd = document.getElementById("cost-total").innerText = 1299 + 100 + 180;
    const newTotal = document.getElementById("total").innerText = 1299 + 100 + 180;
}
function storageFunction2(value) {
    document.getElementById("storage-total").value = 180;
    const newAd = document.getElementById("cost-total").innerText = 1299 + 180 * 2;
    const newTotal = document.getElementById("total").innerText = 1299 + 180 * 2;

}
//delivery update
document.getElementById('second-delivery').addEventListener('click', function () {
    const deliveryTotal = document.getElementById('delivery-total');
    const deliveryTotalText = deliveryTotal.innerText;
    const previousDeliveryTotal = parseFloat(deliveryTotalText) + 20;

    deliveryTotal.innerText = previousDeliveryTotal;

    const balanceTotal = document.getElementById('cost-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + previousDeliveryTotal;
    //total
    const totalNew = document.getElementById('total');
    const balanceText = totalNew.innerText;
    const previousBalance = parseFloat(balanceText);
    totalNew.innerText = previousBalance + previousDeliveryTotal;

});

//apply button

document.getElementById('apply-button').addEventListener('click', function () {
    //get user code
    const applyField = document.getElementById('apply-input');
    const userCode = applyField.value
    //input
    const totalFiled = document.getElementById("total")
    const newTotalText = totalFiled.value;
    const result = parseInt(newTotalText) * 0.2;
    const newResult = result - totalFiled.innerText;
    if (userCode == 'stevekaku') {
        console.log(newResult);
    }
    else {
        console.log('not correct')
    }
})
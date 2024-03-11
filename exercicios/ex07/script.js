let tipAmount = document.getElementById('restip');

let totalBill = document.getElementById('resbill');

function percentage() {
    let tip = Number(document.querySelector('input#tip').value);

    document.getElementById('percentage').innerText = `${tip}%`;
}

function totalToPay() {
    let bill = Number(document.getElementById('bill').value);

    let tip = Number(document.querySelector('input#tip').value);

    let theTip = bill * (tip / 100);

    tipAmount.innerHTML = `${theTip.toLocaleString().replace('.', ',')}`;

}

window.addEventListener('keydown', totalToPay);
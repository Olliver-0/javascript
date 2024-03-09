function percentage() {
    var tip = Number(document.querySelector('input#tip').value);

    document.getElementById('percentage').innerHTML = `${tip}%`;
}

let bill = Number(document.getElementById('bill').value);
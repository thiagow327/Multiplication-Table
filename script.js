function generate() {
    var number = document.getElementById('number').value;
    var print = document.getElementById('print');

    if (number.trim() === '') {
        print.innerHTML = '<p>Enter a valid number</p>';
        return;
    } else {
        number = parseFloat(number);

        print.innerHTML = '';

        for (let index = 0; index <= 10; index++) {
            result = number * index;
            print.innerHTML += `${number} * ${index} = ${result}<br>`;
        }
    }
}
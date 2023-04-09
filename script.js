function generate() {
    var number = document.getElementById('number').value;
    var print = document.getElementById('print');

    number = parseFloat(number);

    for (let index = 0; index <= 10; index++) {
        result = number * index;
        print.innerHTML += `<p>${number} * ${index} = ${result}</p>`;
    }
}
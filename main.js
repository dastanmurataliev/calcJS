// Что такое JS?
// виды пременных  в js
// числа это number
// строки это string
// логические переменные true и false это boolean
// не найдено это undefined
//
//  let num = 10
// console.log(num)
//
// let text = "hello from JS!"
// console.log(text)
//
// let rain = false
// console.log(rain)
//
// let example;
// console.log(example)
//
// let Vova = null
// console.log(Vova)

// переменная в которой хранится наше матем действие
let op;
// функция для результата

function func() {
    // переменная для результата
    let result;
    // получаем первое и второе число
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    // смотрим, что было в переменной
    // с действием, и действуем исходя из этого
    switch (op) {
        case '+':
        result = num1 + num2
        break;
        case '-':
        result = num1 - num2
        break;
        case '*':
        result = num1 * num2
        break;
        case '/':
        if (num2 === 0) {
            document.getElementById("result").textContent ='Ошибка!';
            return;
        }
        result = num1 / num2
        break;
        default:
            document.getElementById("result")
                .textContent ='Ошибка, выберите действие'
    }
    // отправляем рузультат на страницу
    document.getElementById("result").innerText = result;
}


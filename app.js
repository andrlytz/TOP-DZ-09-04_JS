function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = []

function f1 () {
    for (let i = 0; i <= 20; i++) {
        arr.push(random(1,100))
    }
    console.log(arr)
    $('#out1').text('Ваши 20 чисел массива: '+arr)
}

$('#but1').click(f1)

function f2() {
    even = 0
    odd = 0
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even = even + arr[i] 
            // считаем четные
        }
        else {
            odd = odd + arr[i] 
            // считаем НЕчетные
        }
    }
    console.log(even, odd)
    $('#out2').text('Сумма четных чисел массива равна: '+ even)
    $('#out3').text('Сумма НЕчетных чисел массива равна: '+ odd)
}

$('#but2').click(f2)

function f3() {
    let inpt1 = $('#inp1').val()
    let inpt2 = $('#inp2').val()
    let sumStr = ''
    for (let i=0; i < inpt1; i++) {
        let red = random(1,255)
        let green = random(1,255)
        let blue = random(1,255)
        sumStr += '<h4 style="color:rgb('+red+', '+green+', '+blue+')">' + inpt2 + '</h4>'
    }
    $('#out4').html(sumStr)
    console.log(inpt1, inpt2)
}

$('#but3').click(f3)
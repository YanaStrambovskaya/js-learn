/**
 * Created by User on 25.05.2017.
 */

"use strict";

// 1

//var firstNum = prompt('Введите первое число', '');
//var secondNum = prompt('Введите второе число. Первое' + firstNum, '');
//
//if (isNaN(firstNum) || isNaN(secondNum)){
//    document.write('Вы ввели не число');
//}
//else {
//    for (var i = firstNum; i <= secondNum; i++){
//        document.write(i + ' ');
//    }
//}

//2

while (isNaN(x) && isNaN(y)) {
    var x = prompt('Введите первое число', '');
    var y = prompt('Введите второе число. Первое' + x, '');
}

function a (x, y) {
    //var sum = x;
    var i = 0;

    while (i < y){
        x = x + i;
        i++;
    }
    document.write(x);
}

a (x, y);


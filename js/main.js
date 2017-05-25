/**
 * Created by User on 25.05.2017.
 */

"use strict";

var firstNum = prompt('Введите первое число', '');
var secondNum = prompt('Введите второе число. Первое' + firstNum, '');

if (isNaN(firstNum) || isNaN(secondNum)){
    document.write('Вы ввели не число');
}
else {
    for (var i = firstNum; i <= secondNum; i++){
        document.write(i + ' ');
    }
}


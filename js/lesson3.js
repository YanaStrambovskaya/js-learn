/**
 * Created by User on 25.05.2017.
 */

//Массив из случайных чисел

var minNum = +prompt('Введите наименьшее число в массиве', '');
var maxNum = +prompt('Введите наибольшее число в массиве', '');
var arrayLen = prompt('Введите длину массива', '');

var arr = [];

for (var i =0; i < arrayLen; i++) {
    var randomNum = Math.round(minNum + Math.random() * (maxNum - minNum));
    arr.push(randomNum);
}

document.write(arr);




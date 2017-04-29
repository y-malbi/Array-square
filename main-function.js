
var data = prompt('введите массив');
var arr = data.split(' ');
var new_arr = [];
function square(x){
	return x * x;
	} // возведение в квадрат

function map(fn, array){
	for (i=0; i < arr.length; i++){
		new_arr[i] = square(array[i]);
	}
}
console.log(map(square, arr)); 

document.write(' Ваш массив: '+ arr + '</br>' + 
	'Новый массив: ' + new_arr);
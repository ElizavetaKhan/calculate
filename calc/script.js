var memory = 0;
var action = '';

function inp_num(num){
	if(input.value === '0'){
		input.value = num;
	}else{
		input.value += num;
	}
}

function inp_act(act){
	memory = parseInt(input.value);
	input.value = 0;
	action = act;
}

function erase(){
	input.value = 0;
	memory = 0;
	action = '';
}

function backspace(){
	if(input.value.length === 1 || (input.value.length === 2 && input.value[0] == "-")){
		input.value = 0;
	}else{
		input.value = input.value.slice(0,-1);
	}
}

function result(){
	var value = parseInt(input.value);
	
	switch (action){
		case '/':
			input.value = Math.round(memory / value);
		break;
		case '*':
			input.value = memory * value;
		break;
		case '-':
			input.value = memory - value;
		break;
		case '+':
			input.value = memory + value;
		break;
	}

	action = '';
}

document.onkeydown = function(e){
	switch(e.key){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			document.getElementById(e.key).click();
		break;
		case '/':
			a0.click();
		break;
		case '*':
			a1.click();
		break;
		case '-':
			a2.click();
		break;
		case '+':
			a3.click();
		break;
		case 'Backspace':
			bsp.click();
		break;
		case 'С':
		case 'с':
			ers.click();
		break;
		case '=':
		case 'Enter':
			res.click();
		break;
	}
};
const btn = document.querySelector('#btn') as HTMLButtonElement;

btn.onclick = () => {
	let height = Number((document.querySelector('#height') as HTMLInputElement).value)/100;
	let weight = Number((document.querySelector('#weight') as HTMLInputElement).value);

	const bmi = Math.round(weight / (height ** 2));

	const resultDiv = document.querySelector('.result-div') as HTMLDivElement;
	resultDiv.style.animation = 'down .4s 1 both ease-in-out';

	document.querySelector('#bmi')!.innerHTML = String(bmi);
	document.querySelector('#result-weight')!.innerHTML = String(weight);

	let type;
	if(bmi < 18.5){
    type = 'Underweight';
	}
	else if(bmi > 18.5 && bmi < 24.9){
    type = 'Normal weight';
	}
	else if(bmi > 25 && bmi < 29.9){
    type = 'Overweight';
	}
	else if(bmi >= 30){
    type = 'Obese';
	}

	document.querySelector('#type')!.innerHTML = ` ${type}`;
}
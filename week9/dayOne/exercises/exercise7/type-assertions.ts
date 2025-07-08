const inputElement = document.getElementById('username-input');

const typedInput = inputElement as HTMLInputElement;

typedInput.value = 'TypeScriptUser';
typedInput.placeholder = 'Enter your username';

function setInputValue(id: string, value: string): void {
    const element = document.getElementById(id) as HTMLInputElement;
    element.value = value;
}

setInputValue('email-input', 'user@example.com');

const anotherInput = <HTMLInputElement>document.getElementById('age-input');
anotherInput.type = 'number';
anotherInput.min = '0';
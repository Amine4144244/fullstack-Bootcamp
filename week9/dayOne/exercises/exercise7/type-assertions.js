var inputElement = document.getElementById('username-input');
var typedInput = inputElement;
typedInput.value = 'TypeScriptUser';
typedInput.placeholder = 'Enter your username';
function setInputValue(id, value) {
    var element = document.getElementById(id);
    element.value = value;
}
setInputValue('email-input', 'user@example.com');
var anotherInput = document.getElementById('age-input');
anotherInput.type = 'number';
anotherInput.min = '0';

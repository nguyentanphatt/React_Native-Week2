/*Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed. */

const convertBtn = document.getElementById('convertBtn')

const clickHandle = () => {
    const text = document.getElementById('inputText').value
    const variables = text.split('\n').map(line => line.trim());
    const camelCase = variables.map(variable => {
        return variable
            .toLowerCase()
            .split('_')
            .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    })
    const resultText = document.getElementById('resultText')
    resultText.value = camelCase.join('\n')

}
convertBtn.addEventListener('click', clickHandle)
function calculateEllipse() {
    const a = getInputByValue('ellipse-a');
    const b = getInputByValue('ellipse-b');

    const area = 3.1416 * a * b;
   
    getAreaResult('ellipse-area', area.toFixed(2));

    
}


function getInputByValue(value) {
    const input = document.getElementById(value);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function getAreaResult(result, area) {
    const areaResult = document.getElementById(result);
    areaResult.innerText = area;
}


function calculateRectangleArea() {
    const width = getInputValueById('rectangle-width');

    const length = getInputValueById('rectangle-length');

    const area = width * length
    
    setInnerTextById('rectangle-area', area.toFixed(2))
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;

}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
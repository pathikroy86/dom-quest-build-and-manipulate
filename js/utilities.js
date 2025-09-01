function getInputValue(id) {
    const input = document.getElementById(id).value;
    const inputValue = parseFloat(input);
    return inputValue;
}

function getInnerTextValue(id) {
    const input = document.getElementById(id).innerText;
    const inputValue = parseFloat(input);
    return inputValue;
}

function showSectionById(id) {
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
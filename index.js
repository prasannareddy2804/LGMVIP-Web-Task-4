let currentValue = "";

function appendValue(value) {
    currentValue += value;
    updateResult();
}

function calculate() {
    try {
        const result = eval(currentValue);
        currentValue = result.toString();
        updateResult();
    } catch (error) {
        currentValue = "Error";
        updateResult();
    }
}

function clearResult() {
    currentValue = "";
    updateResult();
}

function updateResult() {
    document.getElementById("result").value = currentValue;
}

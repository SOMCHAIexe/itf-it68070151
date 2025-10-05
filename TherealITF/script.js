const current_balance = document.getElementById("current_balance");
const current_cash = document.getElementById("current_cash");
const amount = document.getElementById("amount");

function changecurrent() {
    addLog(`Current cash:${current_cash.value}, Current balance ${current_balance.value}`)
}

function proceed() {
    const type = document.getElementById("operation").value;
    if (type === "deposit") {
        if (Number(amount.value) > Number(current_cash.value)) {
            addLog(`Insufficient Cash`)
        }
        else {
            current_balance.value = Number(current_balance.value) + Number(amount.value);
            current_cash.value = Number(current_cash.value) - Number(amount.value);
            addLog(`Deposit :${amount.value}, Current cash:${current_cash.value}, Current balance:${current_balance.value}`);
        }
    }
    else if (type === "withdraw") {
        if (Number(amount.value) > Number(current_balance.value)) {
            addLog(`Insufficient Balnce`)
        }
        else {
            current_balance.value = Number(current_balance.value) - Number(amount.value);
            current_cash.value = Number(current_cash.value) + Number(amount.value);
            addLog(`Withdrew :${amount.value}, Current cash:${current_cash.value}, Current balance:${current_balance.value}`);
        }
    }
}

function addLog(message) {
    const logBox = document.getElementById("log");
    const time = new Date().toLocaleTimeString();
    logBox.value += `[${time}] ${message}\n`;
    logBox.scrollTop = logBox.scrollHeight;
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById("inputAmount").value);
    const currency = document.getElementById("inputCurrency").value;
    const rate = 36
    let result = 0;

    if (isNaN(amount)) return;

    if (currency === "USD") {
    result = amount * rate;
    document.getElementById("output").innerText = result + " THB";
    } else {
    result = amount / rate;
    document.getElementById("output").innerText = result.toFixed(2) + " USD";
    }
}


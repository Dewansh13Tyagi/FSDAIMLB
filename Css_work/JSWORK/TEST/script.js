// JavaScript for Currency Converter
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const result = document.getElementById('result');

    if (amount === '' || amount <= 0) {
        result.style.color = "red";
        result.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }
        
        const data = await response.json();
        const rate = data.rates[toCurrency];
        
        if (!rate) {
            throw new Error("Currency not supported");
        }

        const convertedAmount = (amount * rate).toFixed(2);
        result.style.color = "green";
        result.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        result.style.color = "red";
        result.innerText = "Error: " + error.message;
    }
}
//გაცვლითი კურსები
const exchangeRates = {
    EUR: 0.34,
    USD: 0.37,
};

// ვალუტის კონვერტაცია
function convertCurrency() {
    const usdAmount = parseFloat(document.getElementById('usdAmount').value);
    const currency = document.getElementById('currency').value;
    
    // შემოწმება, რომ შეყვანილი თანხა ვალიდურია
    if (isNaN(usdAmount)) {
        document.getElementById('result').innerText = "გთხოვთ შეიყვანოთ სწორი თანხა";
        return;
    }

    // გაცვლითი კურსის მიღება და თანხის კონვერტაცია
    const exchangeRate = exchangeRates[currency];
    const convertedAmount = usdAmount * exchangeRate;

    // შედეგის ჩვენება
    document.getElementById('result').innerText = `${usdAmount} GEL უდრის ${convertedAmount.toFixed(2)} ${currency}`;
}

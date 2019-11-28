const calculate = function mortgageCalculator() {

    const loanAmount = document.getElementById("loan_amount").value;
    const interestRate = document.getElementById("interest_rate").value;
    const yearsOfMortgage = document.getElementById("loan_term").value;
    const annualTax = document.getElementById("annual_tax").value;
    const annualInsurance = document.getElementById("annual_insurance").value;

    if (valid()) {

        showPanel();

        const base = ((interestRate / 100) / 12)* loanAmount / (1-Math.pow((1 + ((interestRate / 100)/12)), -yearsOfMortgage * 12));
        const tax = annualTax / 12;
        const insurance = annualInsurance / 12;

        document.getElementById("base").innerHTML = `$ ${base.toFixed(2)}`;
        document.getElementById("tax").innerHTML = `$ ${tax.toFixed(2)}`;
        document.getElementById("insurance").innerHTML = `$ ${insurance.toFixed(2)}`;
        document.getElementById("total").innerHTML = `$ ${(base + tax + insurance).toFixed(2)}`;
    }
}

const valid = function checkValidValues() {
    let valid = true;
    document.getElementById("loan_amount_error").innerHTML = '';
    document.getElementById("annual_tax_error").innerHTML = '';
    document.getElementById("annual_insurance_error").innerHTML = '';

    const loanAmount = document.getElementById("loan_amount").value;
    const annualTax = document.getElementById("annual_tax").value;
    const annualInsurance = document.getElementById("annual_insurance").value;

    if (loanAmount.trim() === '') {
        document.getElementById("loan_amount_error").innerHTML = 'Loan Amount is mandatory';
        valid = false;
    } 
    if (annualTax.trim() === '') {
        document.getElementById("annual_tax_error").innerHTML = 'Annual Tax is mandatory';
        valid = false;
    } 
    if (annualInsurance.trim() === '') {
        document.getElementById("annual_insurance_error").innerHTML = 'Annual Insurance is mandatory';
        valid = false;
    } 
    return valid;
}

window.onload = function() {
    document.getElementById("base").innerHTML = '$ - -';
    document.getElementById("tax").innerHTML = '$ - -';
    document.getElementById("insurance").innerHTML = '$ - -';
    document.getElementById("total").innerHTML = '$ - -';

    window.screen.orientation.type === 'landscape-primary' || window.screen.orientation.type === 'landscape-secondary' ? showPanel() : hidePanel();
};

const showPanel = function showResultPanel() {
    var content = document.getElementById("content");
    content.style.maxHeight = content.scrollHeight + 100 + "px";
}

const hidePanel = function hideResultPanel() {
    var content = document.getElementById("content");
    content.style.maxHeight = null;
}
// get the button
const discountButton = document.getElementById('discount-button');
discountButton.addEventListener('click', function () {
    // get the bill and parse it into number
    const billFieldElement = document.getElementById('bill-field');
    const billAmountString = billFieldElement.value;

    //Making sure whether the amount is number
    if (isNaN(billAmountString) || billAmountString === '' || billAmountString < 0) {
        alert('Please enter a valid bill amount')
        billFieldElement.value = '';
        return;
    }
    const billAmount = parseFloat(billAmountString);

    //get the discount rate and parse it into number
    const discountRateElement = document.getElementById('discount-rate-field');
    const discountRateString = discountRateElement.value;

    //Making sure whether the discount rate is valid. 
    if (isNaN(discountRateString) || discountRateString === '' || discountRateString < 0) {
        alert('Please enter a valid discount rate')
        discountRateElement.value = '';
        return;
    }
    const discountRate = parseFloat(discountRateString);

    // calculate discount 
    const discount = billAmount * discountRate / 100;

    //Calculate discounted amount
    let discountedAmount = billAmount - discount;

    // Get and set discount coupon
    const discountCouponElement = document.getElementById('discount-coupon-field');
    const discountCouponCode = discountCouponElement.value;
    if (discountCouponCode === 'DISC30') {
        discountedAmount = billAmount - (billAmount * .3);
    }
    else {
        discountedAmount = billAmount - discount;
    }

    //Set the discount amount
    const discountedAmountElement = document.getElementById('discounted-amount');
    discountedAmountElement.innerText = discountedAmount;
})
document.getElementById('history-btn').addEventListener('click', function (event) {
    event.preventDefault();
    showSectionById('history-container');
})

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const donationInputValue = getInputValue('noakhali-donation-input-field');
    if (!isNaN(donationInputValue) && donationInputValue > 0) {
        const donatableMoney = getInnerTextValue('donatable-field');
        const totalNoakhaliDonation = getInnerTextValue('total-noakhali-donation');
        const availableDonation = donatableMoney - donationInputValue;
        document.getElementById('donatable-field').innerText = availableDonation;
        const finalNoakhaliDonation = totalNoakhaliDonation + donationInputValue;
        document.getElementById('total-noakhali-donation').innerText = finalNoakhaliDonation;
        document.getElementById('my_modal_1').showModal();
    }
    else {
        alert("Invalid Donation amount");
    }
})

document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const donationInputValue = getInputValue('feni-donation-input-field');
    if (!isNaN(donationInputValue) && donationInputValue > 0) {
        const donatableMoney = getInnerTextValue('donatable-field');
        const totalFeniDonation = getInnerTextValue('total-feni-donation');
        const availableDonation = donatableMoney - donationInputValue;
        document.getElementById('donatable-field').innerText = availableDonation;
        const finalFeniDonation = totalFeniDonation + donationInputValue;
        document.getElementById('total-feni-donation').innerText = finalFeniDonation;
        document.getElementById('my_modal_1').showModal();
    }
    else {
        alert("Invalid Donation amount");
    }
})

document.getElementById('quota-donation-btn').addEventListener('click', function () {
    const donationInputValue = getInputValue('quota-donation-input-field');
    if (!isNaN(donationInputValue) && donationInputValue > 0) {
        const donatableMoney = getInnerTextValue('donatable-field');
        const totalQuotaDonation = getInnerTextValue('total-quota-donation');
        const availableDonation = donatableMoney - donationInputValue;
        document.getElementById('donatable-field').innerText = availableDonation;
        const finalQuotaDonation = totalQuotaDonation + donationInputValue;
        document.getElementById('total-quota-donation').innerText = finalQuotaDonation;
        document.getElementById('my_modal_1').showModal();
    }
    else {
        alert("Invalid Donation amount");
    }
})
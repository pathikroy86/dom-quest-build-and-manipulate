document.getElementById('donation-btn').addEventListener('click', function (event) {
    event.preventDefault();
    showSectionById('donation-container');
})

function historyGeneratorNoakhali() {
    const moneyDonated = document.getElementById('noakhali-donation-input-field').value;
    if (!isNaN(moneyDonated) && moneyDonated > 0) {
        const donationTitle = document.getElementById('noakhali-donation-title').innerText;
        let now = new Date();
        let historyGenerator = document.getElementById('history-generate');
        let newLi = document.createElement('li');
        newLi.classList.add('list-row');
        newLi.innerHTML = `
     <div class = "px-5 mb-5">
      <div class = "text-lg font-bold"><p>${moneyDonated} Taka is donated for ${donationTitle}</p></div>
      <div class="text-xs uppercase font-semibold opacity-60">Date: ${now}</div>
    </div>
    `;
        historyGenerator.appendChild(newLi);
    }
}

function historyGeneratorFeni() {
    const moneyDonated = document.getElementById('feni-donation-input-field').value;
    if (!isNaN(moneyDonated) && moneyDonated > 0) {
        const donationTitle = document.getElementById('feni-donation-title').innerText;
        let now = new Date();
        let historyGenerator = document.getElementById('history-generate');
        let newLi = document.createElement('li');
        newLi.classList.add('list-row');
        newLi.innerHTML = `
     <div class = "px-5 mb-5">
      <div class = "text-lg font-bold"><p>${moneyDonated} Taka is donated for ${donationTitle}</p></div>
      <div class="text-xs uppercase font-semibold opacity-60">Date: ${now}</div>
    </div>
    `;
        historyGenerator.appendChild(newLi);
    }
}

function historyGeneratorQuota() {
    const moneyDonated = document.getElementById('quota-donation-input-field').value;
    if (!isNaN(moneyDonated) && moneyDonated > 0) {
        const donationTitle = document.getElementById('quota-donation-title').innerText;
        let now = new Date();
        let historyGenerator = document.getElementById('history-generate');
        let newLi = document.createElement('li');
        newLi.classList.add('list-row');
        newLi.innerHTML = `
     <div class = "px-5 mb-5">
      <div class = "text-lg font-bold"><p>${moneyDonated} Taka is donated for ${donationTitle}</p></div>
      <div class="text-xs uppercase font-semibold opacity-60">Date: ${now}</div>
    </div>
    `;
        historyGenerator.appendChild(newLi);
    }

}
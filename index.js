document.addEventListener('DOMContentLoaded', () => {
    const cardholderName = document.getElementById('cardholderName');
    const cardNumber = document.getElementById('cardNumber');
    const expiryMonth = document.getElementById('expiryMonth');
    const expiryYear = document.getElementById('expiryYear');
    const cvc = document.getElementById('cvc');

    const cardholderNameDisplay = document.querySelector('.cardholder-name');
    const cardNumberDisplay = document.querySelector('.card-number');
    const cardExpiryDisplay = document.querySelector('.card-expiry');
    const cardCvcDisplay = document.querySelector('.card-cvc');

    const form = document.querySelector('.credit-card-form');
    const thankYouMessage = document.querySelector('.thank-you-message');
    const continueButton = document.getElementById('continueButton');

    // Kart sahibi adı güncelleme
    cardholderName.addEventListener('input', () => {
        cardholderNameDisplay.textContent = cardholderName.value || 'Ad Soyad';
    });

    // Kart numarası güncelleme (4 haneli gruplar halinde)
    cardNumber.addEventListener('input', () => {
        let value = cardNumber.value.replace(/\D/g, '');
        value = value.match(/.{1,4}/g)?.join(' ') || value;
        cardNumber.value = value;
        cardNumberDisplay.textContent = value || '0000 0000 0000 0000';
    });

    // Son kullanma tarihi güncelleme
    function updateExpiry() {
        const month = expiryMonth.value.replace(/\D/g, '') || '00';
        const year = expiryYear.value.replace(/\D/g, '') || '00';
        expiryMonth.value = month;
        expiryYear.value = year;
        cardExpiryDisplay.textContent = `${month}/${year}`;
    }

    expiryMonth.addEventListener('input', () => {
        expiryMonth.value = expiryMonth.value.replace(/\D/g, '');
        updateExpiry();
    });

    expiryYear.addEventListener('input', () => {
        expiryYear.value = expiryYear.value.replace(/\D/g, '');
        updateExpiry();
    });

    // CVC güncelleme
    cvc.addEventListener('input', () => {
        const value = cvc.value.replace(/\D/g, '');
        cvc.value = value;
        cardCvcDisplay.textContent = value || '000';
    });

    // Form gönderildiğinde teşekkür mesajı göster
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('d-none');
        thankYouMessage.classList.remove('d-none');
    });

    // Continue butonuna basıldığında sayfa yenilenir
    continueButton.addEventListener('click', () => {
        location.reload();
    });
});

function submitForm() {
    // Tampilkan pop-up
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    // Kosongkan input formulir
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

function closePopup() {
    // Sembunyikan pop-up
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


function validateHour(input) {
    const value = parseInt(input.value, 10);
    if (isNaN(value) || value < 0 || value >= 24) {
        return 'Giờ phải từ 0 đến 23.';
    }
    return '';
}

function validateMinute(input) {
    const value = parseInt(input.value, 10);
    if (isNaN(value) || value < 0 || value >= 60) {
        return 'Phút phải từ 0 đến 59.';
    }
    return '';
}

function updateErrorMessages() {
    const startHourError = validateHour(document.getElementById('startHour'));
    document.getElementById('startHourError').innerText = startHourError;
    
    const startMinuteError = validateMinute(document.getElementById('startMinute'));
    document.getElementById('startMinuteError').innerText = startMinuteError;
    
    const endHourError = validateHour(document.getElementById('endHour'));
    document.getElementById('endHourError').innerText = endHourError;
    
    const endMinuteError = validateMinute(document.getElementById('endMinute'));
    document.getElementById('endMinuteError').innerText = endMinuteError;
}

document.getElementById('startHour').addEventListener('input', function () {
    if (this.value.length === 2) {
        document.getElementById('startMinute').focus();
        document.getElementById('startMinute').select(); // Bôi đen số cũ
    }
    updateErrorMessages();
});

document.getElementById('startMinute').addEventListener('input', function () {
    if (this.value.length === 2) {
        document.getElementById('endHour').focus();
        document.getElementById('endHour').select(); // Bôi đen số cũ
    }
    updateErrorMessages();
});

document.getElementById('endHour').addEventListener('input', function () {
    if (this.value.length === 2) {
        document.getElementById('endMinute').focus();
        document.getElementById('endMinute').select(); // Bôi đen số cũ
    }
    updateErrorMessages();
});

document.getElementById('endMinute').addEventListener('input', function () {
    updateErrorMessages();
});

// Chọn toàn bộ nội dung khi focus vào input
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.select();
    });
});

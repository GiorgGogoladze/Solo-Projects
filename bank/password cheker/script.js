let passwordStrength = 0;

function checkStrength() {
    var strengthMeter = document.getElementById('strength-meter');
    var strengthText = document.getElementById('strength-text');
    var password = document.getElementById('password').value;
    passwordStrength = 0;

    if (password.length >= 8) {
        passwordStrength += 1;
    }
    if (password.match(/[a-z]+/)) {
        passwordStrength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        passwordStrength += 1;
    }
    if (password.match(/[0-9]+/)) {
        passwordStrength += 1;
    }
    if (password.match(/[\W_]+/)) {
        passwordStrength += 1;
    }

    switch (passwordStrength) {
        case 1:
            strengthMeter.className = 'weak';
            strengthText.textContent = 'Weak';
            break;
        case 2:
            strengthMeter.className = 'medium';
            strengthText.textContent = 'Medium';
            break;
        case 3:
            strengthMeter.className = 'strong';
            strengthText.textContent = 'Strong';
            break;
        case 4:
        case 5:
            strengthMeter.className = 'very-strong';
            strengthText.textContent = 'Very Strong';
            break;
        default:
            strengthMeter.className = '';
            strengthText.textContent = '';
    }
}

function validateForm() {
    var errorMessage = document.getElementById('error-message');
    if (passwordStrength < 3) {
        errorMessage.textContent = 'Password is too weak. Please choose a stronger password.';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    }
}

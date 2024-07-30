document.getElementById('password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const strength = getPasswordStrength(password);

    const strengthBar = document.getElementById('password-strength');
    const strengthMessage = document.getElementById('password-strength-message');

    switch (strength) {
        case 'Weak':
            strengthBar.style.backgroundColor = 'red';
            strengthBar.style.width = '33%';
            strengthMessage.innerText = 'Weak password';
            break;
        case 'Medium':
            strengthBar.style.backgroundColor = 'orange';
            strengthBar.style.width = '66%';
            strengthMessage.innerText = 'Medium strength password';
            break;
        case 'Strong':
            strengthBar.style.backgroundColor = 'green';
            strengthBar.style.width = '100%';
            strengthMessage.innerText = 'Strong password';
            break;
        default:
            strengthBar.style.backgroundColor = '#ccc';
            strengthBar.style.width = '0';
            strengthMessage.innerText = '';
            break;
    }
});

function getPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak';
    }

    let strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[\W_]+/)) {
        strength += 1;
    }

    if (strength < 2) {
        return 'Weak';
    } else if (strength < 4) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('result').innerText = `Successfully signed up as ${username}.`;
        localStorage.setItem('username', username);
        window.location.href = '/full/bank/bank.html';
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
});
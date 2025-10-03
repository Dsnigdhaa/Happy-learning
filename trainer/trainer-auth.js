console.log('Trainer Auth.js script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded for trainer auth');
    const loginForm = document.getElementById('trainerLoginForm');
    console.log('Trainer login form found:', !!loginForm);
    if (!loginForm) return; // Exit if not trainer login page

    const showPasswordCheckbox = document.getElementById('showTrainerPassword');
    const passwordInput = document.getElementById('trainerPassword');
    const usernameInput = document.getElementById('trainerUsername');
    const errorMessage = document.getElementById('trainerErrorMessage');

    console.log('Elements found - checkbox:', !!showPasswordCheckbox, 'password:', !!passwordInput, 'username:', !!usernameInput, 'error:', !!errorMessage);

    togglePassword(showPasswordCheckbox, passwordInput);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Trainer form submitted');
        hideError(errorMessage);

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();
        console.log('Trainer Username:', username, 'Password length:', password.length);

        // Demo trainers (in real app, fetch from server or localStorage)
        const demoTrainers = {
            'trainer1': 'pass123',
            'alice': 'alice123',
            'charlie': 'charlie123',
            'venkatesh': '1234567'
        };

        console.log('Demo trainer keys:', Object.keys(demoTrainers));

        if (!username || !password) {
            showError(errorMessage, 'Please fill in all fields');
            return;
        }

        if (demoTrainers[username] && demoTrainers[username] === password) {
            console.log('Trainer login successful');
            localStorage.setItem('trainerLoggedIn', 'true');
            localStorage.setItem('trainerUsername', username);
            window.location.href = '../trainer/dashboard.html';
        } else {
            console.log('Trainer login failed');
            console.log('Entered username:', username);
            console.log('Entered password:', password);
            showError(errorMessage, 'Invalid username or password. Please try again.');
            passwordInput.value = '';
            usernameInput.focus();
        }
    });

    usernameInput.addEventListener('input', () => hideError(errorMessage));
    passwordInput.addEventListener('input', () => hideError(errorMessage));
});

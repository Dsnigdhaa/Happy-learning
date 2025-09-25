document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    if (!loginForm) return; // Exit if not login page

    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('errorMessage');

    togglePassword(showPasswordCheckbox, passwordInput);

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideError(errorMessage);

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            showError(errorMessage, 'Please fill in all fields');
            return;
        }

        if (demoAdmins[username] && demoAdmins[username] === password) {
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
            window.location.href = 'admin/dashboard.html';
        } else {
            showError(errorMessage, 'Invalid username or password. Please try again.');
            passwordInput.value = '';
            usernameInput.focus();
        }
    });

    usernameInput.addEventListener('input', () => hideError(errorMessage));
    passwordInput.addEventListener('input', () => hideError(errorMessage));
});

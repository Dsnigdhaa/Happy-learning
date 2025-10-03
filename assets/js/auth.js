console.log('Auth.js script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('Demo admins available:', typeof demoAdmins !== 'undefined');
    if (typeof demoAdmins !== 'undefined') {
        console.log('Demo admins keys:', Object.keys(demoAdmins));
    }
    const loginForm = document.getElementById('adminLoginForm');
    console.log('Login form found:', !!loginForm);
    if (!loginForm) return; // Exit if not login page

    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('errorMessage');

    console.log('Elements found - checkbox:', !!showPasswordCheckbox, 'password:', !!passwordInput, 'username:', !!usernameInput, 'error:', !!errorMessage);

    togglePassword(showPasswordCheckbox, passwordInput);

    const loginButton = document.querySelector('.login-btn');
    console.log('Login button found:', !!loginButton);
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            console.log('Login button clicked');
        });
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        hideError(errorMessage);

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();
        console.log('Username:', username, 'Password length:', password.length);
        console.log('Demo admins keys:', Object.keys(demoAdmins));

        if (!username || !password) {
            showError(errorMessage, 'Please fill in all fields');
            return;
        }

        const registeredUser = JSON.parse(localStorage.getItem('newUser'));
        if (registeredUser && registeredUser.username.toLowerCase() === username && registeredUser.password === password) {
            console.log('Registered user login successful');
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
            window.location.href = 'admin/dashboard.html';
        } else if (demoAdmins[username] && demoAdmins[username] === password) {
            console.log('Demo admin login successful');
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminUsername', username);
            window.location.href = 'admin/dashboard.html';
        } else {
            console.log('Login failed');
            showError(errorMessage, 'Invalid username or password. Please try again.');
            passwordInput.value = '';
            usernameInput.focus();
        }
    });

    usernameInput.addEventListener('input', () => hideError(errorMessage));
    passwordInput.addEventListener('input', () => hideError(errorMessage));

    // Add logout button event listener to redirect to login page
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminUsername');
            // Use absolute path or full URL to ensure correct redirection
            window.location.href = '/login.html';
        });
    }
});

// Authentication Functions
document.addEventListener('DOMContentLoaded', () => {
    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real app, you would send this to your backend
            console.log('Login attempt with:', email, password);
            
            // For demo purposes, just redirect
            alert('Login successful! Redirecting to homepage...');
            window.location.href = 'index.html';
        });
    }
    
    // Registration Form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            const confirmPassword = this.querySelector('#confirm-password').value;
            
            // Simple validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this to your backend
            console.log('Registration attempt with:', name, email, password);
            
            // For demo purposes, just redirect
            alert('Registration successful! You can now login.');
            window.location.href = 'login.html';
        });
    }
    
    // Social Login Buttons
    const googleBtn = document.querySelector('.btn-google');
    const facebookBtn = document.querySelector('.btn-facebook');
    
    if (googleBtn) {
        googleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Google login would be implemented here');
        });
    }
    
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Facebook login would be implemented here');
        });
    }
});
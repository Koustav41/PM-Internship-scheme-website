document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('registerUsername').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;

        if (!name || !email || !password) {
            alert('Please fill all fields.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
            alert('Email already registered.');
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
    });
});
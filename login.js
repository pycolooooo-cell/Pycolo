const toggleIcon = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggleIcon.addEventListener('click', function() {
    
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    
    passwordInput.setAttribute('type', type);
    
    if (type === 'password') {
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
});


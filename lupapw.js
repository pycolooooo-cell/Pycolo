const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');

document.getElementById('form-email').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;
    
    if(email) {
        document.getElementById('userEmailSpan').innerText = email;
        step1.classList.remove('active');
        step2.classList.add('active');
    }
});

document.getElementById('form-otp').addEventListener('submit', function(e) {
    e.preventDefault();

    step2.classList.remove('active');
    step3.classList.add('active');
});

document.getElementById('form-new-pass').addEventListener('submit', function(e) {
    e.preventDefault();

    step3.classList.remove('active');
    step4.classList.add('active');
    
    document.getElementById('backLink').style.display = 'none';
});


const otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (input.value.length === 1) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0) {
            if (index > 0) {
                otpInputs[index - 1].focus();
            }
        }
    });
});


document.querySelectorAll('.toggle-pass').forEach(icon => {
    icon.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        
        if (type === 'password') {
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});

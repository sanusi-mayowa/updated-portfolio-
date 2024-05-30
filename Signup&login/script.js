const signupPassword = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
  const type = signupPassword.getAttribute('type') === 'text' ? 'password' : 'text';
  signupPassword.setAttribute('type', type);
  togglePassword.className = type === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye-fill';
});

document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var domain = document.getElementById("domain").value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const account = {
      domain: domain,
      userName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    localStorage.setItem('account', JSON.stringify(account));

    var signupModal = document.getElementById('signupModal');
    signupModal.style.display = 'flex';

    setTimeout(function() {
      signupModal.style.display = 'none';
      signupForm.reset();
      window.location.href = 'login.html';
    }, 3000);
  });
});
  



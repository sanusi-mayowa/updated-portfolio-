document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var domain = document.getElementById('loginDomain').value
      var email = document.getElementById('inputUsername').value;
      var password = document.getElementById('inputPassword').value;
  
      const storedAccount = JSON.parse(localStorage.getItem('account'));
  
      if (storedAccount && storedAccount.email === email && storedAccount.password === password && storedAccount.domain === domain) {
        var signupModal = document.getElementById('signupModal');
        signupModal.style.display = 'flex';
  
        setTimeout(function() {
          signupModal.style.display = 'none';
          loginForm.reset();
          window.location.href = 'home.html';
        }, 3000);
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  
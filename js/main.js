document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var errorMessage = document.getElementById('errorMessage');

  errorMessage.textContent = '';

  if (name === '' || email === '') {
      errorMessage.textContent = 'All fields are required!';
      return;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address!';
      return;
  }

  alert('Thank you for subscribing!');
});


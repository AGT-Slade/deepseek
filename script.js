document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  alert('Thank you for contacting us! We will get back to you soon.');
});
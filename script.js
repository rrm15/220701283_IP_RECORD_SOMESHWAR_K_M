// EB Recruitment Form Submission
document.getElementById('ebRecruitmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !phone || !experience || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('EB Recruitment form submitted successfully.');
    document.getElementById('ebRecruitmentForm').reset();
  });
  
  // Networking Form Submission
  document.getElementById('networkingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;
    const message = document.getElementById('message').value;
  
    if (!fullName || !email || !phone || !profession || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Networking form submitted successfully.');
    document.getElementById('networkingForm').reset();
  });
  
  // Animation for Banner Text (Sleek Fade In)
  document.addEventListener('DOMContentLoaded', function () {
    const bannerText = document.querySelector('.banner h1');
    bannerText.style.opacity = 0;
    setTimeout(() => {
      bannerText.style.transition = 'opacity 2s';
      bannerText.style.opacity = 1;
    }, 500);
  });
  
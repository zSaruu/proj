document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
      feedbackForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Lai neatsvaidzina lapu
          alert('Paldies par jūsu atsauksmi!');
      });
  }
});
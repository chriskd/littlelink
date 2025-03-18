document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  const tipModal = document.getElementById('tip-modal');
  
  // Get the button that opens the modal
  const tipButton = document.getElementById('tip-button');
  
  // Get the <span> element that closes the modal
  const closeButton = tipModal.querySelector('.close');
  
  // When the user clicks the button, open the modal
  tipButton.addEventListener('click', function(e) {
    e.preventDefault();
    tipModal.style.display = 'block';
  });
  
  // When the user clicks on <span> (x), close the modal
  closeButton.addEventListener('click', function() {
    tipModal.style.display = 'none';
  });
  
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target === tipModal) {
      tipModal.style.display = 'none';
    }
  });
});

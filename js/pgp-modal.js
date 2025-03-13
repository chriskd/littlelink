// PGP Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("pgp-modal");
  const btn = document.getElementById("pgp-key-button");
  const span = document.getElementsByClassName("close")[0];

  // Open modal when PGP button is clicked
  btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
  }

  // Close modal when X is clicked
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Copy functionality
  const copyButtons = document.querySelectorAll('.copy-button');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const textToCopy = document.getElementById(targetId).textContent;
      
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          button.textContent = 'Copied!';
          
          setTimeout(() => {
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg> Copy`;
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });
});

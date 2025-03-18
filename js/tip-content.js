document.addEventListener('DOMContentLoaded', function() {
  const tipContent = document.getElementById('tip-content');
  
  // The content below can be easily updated later
  tipContent.innerHTML = `
    <p>If you have information you'd like to share securely, <em><b>please reach out via Signal.</b></em> 
    <br>
    <br>
    Messages sent via Signal are end-to-end encrypted, and Signal retains minimal 
    metadata about users and messages.
    <a href="https://freedom.press/digisec/blog/advice-column-3/">This article</a> provides a good overview of the app's security 
    features and limitations. 
    <br>
    <br>
    If you wish to keep your Signal phone number private, 
    you should use <a href="https://signal.org/blog/phone-number-privacy-usernames/">Signal usernames.</a>
   
    </p>
  `;
});

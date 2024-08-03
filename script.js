document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/DELL/Downloads/povertyfree%20website/team%20project/team%20proj%20-%20Copy/upi%20id.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const whoWeAreLink = document.querySelector('.header-nav a[href="#who-we-are"]'); // Adjust the class name if needed
  
    if (whoWeAreLink) {
      whoWeAreLink.addEventListener('click', (event) => {
        event.preventDefault();
        const whoWeAreSection = document.getElementById('who-we-are');
  
        if (whoWeAreSection) {
          whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error('Who We Are section not found');
        }
      });
    } else {
      console.error('Who We Are link not found');
    }
  });
  
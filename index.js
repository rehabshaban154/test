

document.addEventListener("DOMContentLoaded", function () {
    const typingSpan = document.getElementById("typing");
    const textToType = " Frontend Developer";
    const typingSpeed = 100; // Adjust the typing speed as needed
  
    function typeText(index) {
      typingSpan.textContent = textToType.slice(0, index);
      if (index < textToType.length) {
        setTimeout(function () {
          typeText(index + 1);
        }, typingSpeed);
      } else {
        // If the end of the text is reached, start again
        typeText(0);
      }
    }
  
    // Start the typing animation
    typeText(0);
  });
  
  
  
  
  
  
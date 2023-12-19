document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
  
    const options = {
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the target value from the 'data-target' attribute
          const targetValue = entry.target.getAttribute("data-target");
          
          // Start the counter animation
          countUp(entry.target, targetValue);
          
          // Unobserve the element once it's in view
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  
  function countUp(element, target) {
    let current = 0;
    const increment = 1;
    const speed = 30; // Increase for a slower count-up
    
    const updateCounter = () => {
      if (current < target) {
        element.textContent = current;
        current += increment;
        setTimeout(updateCounter, speed);
      } else {
        element.textContent = target; // Ensure the final value is set correctly
        element.style.opacity = 1; // Make the element visible after counting up
      }
    };
  
    updateCounter();
  }
  
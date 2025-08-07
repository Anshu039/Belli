 
    function toggleMenu() {
      document.getElementById('navMenu').classList.toggle('active');
    }


     function animateValue(id, start, end, duration) {
      let obj = document.getElementById(id);
      let range = end - start;
      let startTime = null;
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        obj.innerText = Math.floor(progress * range + start);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    let animated = false;
    window.addEventListener('scroll', () => {
      const stats = document.querySelector('.stats');
      if (!animated && isInViewport(stats)) {
        animateValue("patients", 0, 500, 1500);
        animateValue("success", 0, 95, 1500);
        animateValue("experience", 0, 15, 1500);
        animated = true;
      }
    });




       const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        // Toggle answer
        answer.classList.toggle('open');
        arrow.classList.toggle('rotate');

        // Close other open answers
        document.querySelectorAll('.faq-answer').forEach((item) => {
          if (item !== answer) item.classList.remove('open');
        });
        document.querySelectorAll('.arrow').forEach((item) => {
          if (item !== arrow) item.classList.remove('rotate');
        });
      });
    });



     function toggleMenu() {
      document.getElementById('navMenu').classList.toggle('active');
    }
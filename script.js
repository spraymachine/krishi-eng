    // Safe loader for local Lottie library
    (function loadLottie(){
      var s = document.createElement('script');
      s.src = 'assets/js/lottie.min.js'; // place lottie.min.js locally
      s.async = true;
      s.onload = init;
      s.onerror = init; // continue without Lottie
      document.head.appendChild(s);
    })();

    // IntersectionObserver to reveal cards and sections
    const io = new IntersectionObserver((entries)=> {
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('in-view'); }
      });
    }, { threshold: .2 });

    window.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.card').forEach(el=> io.observe(el));
  document.querySelectorAll('.client').forEach(el=> io.observe(el)); // NEW
  document.getElementById('y').textContent = new Date().getFullYear();
});

    // Initialize Lottie animations when ready
    function init(){
      // If lottie failed to load, gracefully skip
      if(!(window.lottie && document.getElementById('lottie-hero'))) return;

      // Hero animation (place blueprint.json at assets/animations/blueprint.json)
      window.lottie.loadAnimation({
        container: document.getElementById('lottie-hero'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/blueprint.json' // replace with your JSON
      });

      // Optional: play/pause on visibility
      const hero = document.getElementById('lottie-hero');
      const vis = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          const anim = hero.__lottie || null;
          if(!anim) return;
          if(entry.isIntersecting) anim.play();
          else anim.pause();
        });
      }, { threshold: .1 });

      // attach animation instance for toggling
      hero.__lottie = window.lottie.getRegisteredAnimations
        ? window.lottie.getRegisteredAnimations().slice(-1)
        : null;

      vis.observe(hero);
    }

    // Simple form handler (client-side)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // basic validation
      if(!data.name || !data.email || !data.phone || !data.service){
        alert('Please fill all required fields.');
        return;
      }
      // TODO: replace with real submission (fetch to API/email service)
      console.log('Contact request:', data);
      alert('Thanks! Your request has been recorded. The team will get back shortly.');
      form.reset();
    });
  
function toggleNav() {
      var navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('show');
    }




 document.addEventListener('DOMContentLoaded', function() {
    
    // Get the popup
    var popup = document.getElementById("thankYouPopup");

    // Get the button that opens the popup
    var btn = document.getElementById("submitBtn");

    // Get the <span> element that closes the popup
    var span = document.getElementsByClassName("close-btn")[0];

    // When the user clicks the button, open the popup 
    btn.onclick = function() {
        popup.style.display = "block";
    }

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
  });
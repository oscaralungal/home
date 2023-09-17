(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();
      let thisForm = this;
      let action = thisForm.getAttribute('action');
      thisForm.querySelector('.sent-message').classList.add('d-block');


    });
  });

})();

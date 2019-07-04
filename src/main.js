const form = document.forms[0];
form.elements.plan.forEach(function(plan) {
  plan.addEventListener('change', function() {
    document.querySelector('.form__total').textContent = '30$';
  });
});

const monthly = form.elements.plan[1];
const annually = form.elements.plan[0];

// enable button
document.querySelector('.form__pay').disabled = false;

// feature-accordition

// please check line 20 !!!!
const question = document.querySelectorAll('.accordion__question');
question.forEach(function(add) {
  add.addEventListener('click', function() {
    add.classList.toggle('accordion--active');
  });
});

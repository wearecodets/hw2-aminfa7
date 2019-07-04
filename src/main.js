const form = document.forms[0];
const monthly = form.elements.plan[1];
monthly.addEventListener('mousedown', function() {
  document.querySelector('.form__total').textContent = '30$';
});
const annually = form.elements.plan[0];
annually.addEventListener('mousedown', function() {
  document.querySelector('.form__total').textContent = '300$';
});

// enable button
document.querySelector('.form__pay').disabled = false;

// feature-accordition

// please check line 23 !!!!
// need a bit help for the last part
const question = document.querySelectorAll('.accordion__question');
question.forEach(function(add) {
  add.addEventListener('click', function() {
    add.classList.toggle('accordion--active');
  });
});

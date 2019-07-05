// something cool i learned :
// before i chose mousedown n click as an event so if i click on the value the chosen input changes but the function doesnt work because the event is mouse down it must exactly be click on the radio button.....

const form = document.forms[0];
const payment = form.elements.plan;

payment.forEach(function(pembayaran) {
  pembayaran.addEventListener('change', function() {
    if (form.plan.value === 'Monthly') {
      document.querySelector('.form__total').textContent = '30$';
      document.querySelector('.form__pay span').textContent = '30$';
    }

    if (form.plan.value === 'Annually') {
      document.querySelector('.form__total').textContent = '300$';
      document.querySelector('.form__pay span').textContent = '300$';
    }
  });
});

// enable button !!!!!!
const payButton = form.elements.submit;
const money = document.querySelector('.form__pay span');
if (money.textContent != '$0') {
  payButton.disabled = false;
}

// payPAl Amount Bug
//  need help in this :(((

const paypalLink = document.querySelector('a.form__cc-heading');
paypalLink.setAttribute('href', `https://paypal.me/nikosolihin/${money}`);

// feature-accordition

const questions = document.querySelectorAll('.accordion');

questions.forEach(function(add) {
  add.addEventListener('click', function() {
    add.classList.toggle('accordion--active');
  });
});

/* const questionOne = document.querySelector('.accordion');
const questionTwo = document.querySelector('.accordion:last-child');

//if (questionOne.classList = 'accordion--active') { questionTwo.classList.remove('accordion--active'); }
//if (questionTwo.classList = 'accordion--active') { questionOne.classList.remove('accordion--active');} */

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const msg = document.querySelector('.msg')
const fp = document.getElementById('FP');
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


fp.addEventListener('click', () => {


alert("Verification mail has been sent to your registered email!");

});

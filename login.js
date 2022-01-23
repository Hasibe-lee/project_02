window.onload = function () {
  let btn = document.querySelector('#btn');
  btn.addEventListener('click', function () {
    document.body.classList.toggle('blue');
  })
}
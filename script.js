$(function () {
  $('.button').on('click',function (event) {
    event.preventDefault();
    $('.form__help').show(400);
  });
  $('.form__element').on('mouseover',showHelp);
  $('.form__element').on('mouseleave',hideHelp);
});
function showHelp() {
  $(this).next('.form__help').show(500);
}
function hideHelp() {
  $(this).next('.form__help').hide(500);
}

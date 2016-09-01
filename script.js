$(function () {
  $('.button').on('click',function (event) {
    event.preventDefault();
    $('.form__help').show(400);
  });
  $('.form__element').on('mouseover',showHelp);
  $('.form__element').on('mouseleave',hideHelp);

  $('.form__element').on('focus',showHelp);
  $('.form__element').on('blur',hideHelp);

  $('.form__element').on('keyup',function(){
    if (event.which == 9) {
	        var $next  = $('.form__element').eq($('.form__element').index(this) + 1);
	        $next.focus();
	    }
  });
});
function showHelp() {
  $(this).next('.form__help').show(500);
}
function hideHelp() {
  $(this).next('.form__help').hide(400);
}

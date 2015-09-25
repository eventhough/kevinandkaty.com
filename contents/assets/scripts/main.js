$(document).ready(function() {
  setMenuItemActive();

  $('#toggle').click(function (e) {
    $('#tuckedMenu').toggleClass('custom-menu-tucked');
    $('#toggle').toggleClass('x');
  });
});

function setMenuItemActive() {
  console.log(window.location.href);
  var regex = /.*\/(\w+)(.html)?/;

  var matches = window.location.href.match(regex);

  var page;

  if (matches) {
    page = matches[1];
    console.log(page);
    if ($('#' + page).length == 1) {
      $('#' + page).toggleClass('active');
    } else {
      $('#index').toggleClass('active');
    }
  }
}

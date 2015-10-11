$(document).ready(function() {
  setMenuItemActive();

  $('#toggle').click(function (e) {
    $('#tuckedMenu').toggleClass('custom-menu-tucked');
    $('#toggle').toggleClass('x');
  });

  openPhotoSwipe();
});

function setMenuItemActive() {
  var regex = /.*\/(\w+)(.html)?/;

  var matches = window.location.href.match(regex);

  var page;

  if (matches) {
    page = matches[1];
    if ($('#' + page).length == 1) {
      $('#' + page).toggleClass('active');
    } else {
      $('#index').toggleClass('active');
    }
  }
}

function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'http://placehold.it/600x400',
          w: 600,
          h: 400
      },
      {
          src: 'http://placehold.it/1200x900',
          w: 1200,
          h: 900
      }
  ];

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}

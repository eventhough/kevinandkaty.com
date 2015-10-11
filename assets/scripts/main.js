var $foo;

$(document).ready(function () {
  setMenuItemActive();

  $('#toggle').click(function (e) {
    $('#tuckedMenu').toggleClass('custom-menu-tucked');
    $('#toggle').toggleClass('x');
  });

  $('.picture').each(function () {
    $(this).click(function (evt) {
      evt.preventDefault();
      var items = [];

      var $href = $(this).attr('href');
      var $size = $(this).data('size').split('x');
      var $width = $size[0];
      var $height = $size[1];

      var item = {
        src: $href,
        w: $width,
        h: $height
      }

      items.push(item);
      openPhotoSwipe(items);
    })
  });

  resizeYoutubeEmbeds();
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

function openPhotoSwipe(items) {
  var $pswp = $('.pswp')[0];

  var options = {
    index: 0,
    fullscreenEl: false,
    shareEl: false
  }

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
  gallery.init();
}

function resizeYoutubeEmbeds() {
  // Find all YouTube videos
  var $allVideos = $("iframe[src^='//www.youtube.com']"),

      // The element that is fluid width
      $fluidEl = $("body");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // When the window is resized
  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

  // Kick off one resize to fix all videos on page load
  }).resize();
}

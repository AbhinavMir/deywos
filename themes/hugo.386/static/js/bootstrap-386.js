self._386 = self._386 || {};

$(function(){
  var character = { height: 20, width: 12.4 };

  function scrollLock() {
    var last = 0;
    $(window).bind('scroll', function(e) {
      var func, off = $(window).scrollTop();

      console.log(off, last, off < last ? "up" : "down");

      // this determines whether the user is intending to go up or down.
      func = off < last ? "floor" : "ceil";

      // make sure we don't run this from ourselves
      if(off % character.height === 0) {
        return;
      }
      last = off;

      window.scrollTo(
        0,
        Math[func](off / character.height) * character.height
      );

    }); 
  }  

  function loading() {
    document.body.style.visibility = 'visible';
  }
  
  loading();
});


(function() {
  let url = null;
  function act() {
    if (window.location.href != url) {
      let v = document.querySelector('video');
      v.addEventListener('webkitpresentationmodechanged', (e)=>e.stopPropagation(), true);
      setTimeout(()=>v.webkitSetPresentationMode('picture-in-picture'), 3000);
      completion()
      url = window.location.href;
    }
  }
  
  act();
  setInterval(act, 1000);
})()

(function() {
  setInterval(function() {
    
    function ex() {
      var elem = document.querySelector('#continueButton');
      if(elem) {
          elem.click()
      }
    }

    Array.from(document.querySelectorAll('iframe')).forEach((e) => {
        if (e) {
            try {
                e.contentWindow.eval(ex.toString())
                e.contentWindow.ex()
            } catch {}
        }
    })
    
    
  }, 250);
  
})();

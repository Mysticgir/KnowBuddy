function fun() {
    var radios = document.getElementsByName('q1');
    var q1_first = null;
  
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        q1_first = radios[i].value;
       localStorage.setItem("q1_first_l",q1_first)

        break
      }
    
    }
    window.location.href="question2.html"
  }
$.ready(function(){

  var line = new ProgressBar.Line('#example-line-container', {
    color: '#FCB03C',
    duration: 5000

  });

  function bargo(){
    line.animate(1, function() {
        line.animate(0);
    })
  }

  $("#goButton").addEventListener("click", bargo);

});
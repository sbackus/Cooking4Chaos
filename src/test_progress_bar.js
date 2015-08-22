function bargo(){
    var line = new ProgressBar.Line('#example-line-container', {
      color: '#FCB03C',
      duration: 5000

    });
    line.animate(1, function() {
        line.animate(0);
    })
  }
var counter = 0;

function bargo(){
    var line = new ProgressBar.Line('#example-line-container', {
      color: '#FCB03C',
      duration: 2000

    });
    line.animate(1, function() {
        line.animate(0);
        counter +=1; //increment counter
        document.getElementById('testCounter').innerHTML = counter; //change counter on index.html
    })
  }
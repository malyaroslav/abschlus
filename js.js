document.getElementById('cube').onmousemove = function (e) {
    this.style.transform = 'rotateX(' + e.pageY * 5 + 'deg) rotateY(' + -e.pageX * 5 + 'deg)';

};


var side = document.getElementsByClassName('side');
var sections = document.getElementsByTagName('section');

    //function start() {
    //    for (var i = 0; i < side.length; i++) {
    //        section[i].classList.add('hide');
    //        
    //    }
    //}
    //
    //
    //
    //start();


    for (var i = 0; i < side.length; i++) {
        sections[i].classList.add('hide');
        side[i].addEventListener('click', start);
    }

function start() {
    var k = this.classList[1];
//    console.log(k);
    
        var sec = document.getElementsByClassName(k)[1];
    console.log(sec);
       for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('hide');}
    
       sec.classList.remove('hide');
       sec.classList.add('show');
      
       }
    
        
    
    


    var p = document.getElementsByClassName('minimenu');
    console.log(p);
    var info = document.getElementsByClassName('info');
    console.log(info);

    for(i=0; i<p.length; i++){
        info[i].classList.add('hide');
        p[i].addEventListener('click', start2);
    }

function start2(e){
    var z = e.target.TEXT_NODE;
    console.log(z);
}

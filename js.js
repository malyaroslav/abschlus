//cube start

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
    
        
//    cube end;
    
//Tabs start

   var tab;
var tabContent;

tabContent=document.getElementsByClassName('tabContent');
tab=document.getElementsByClassName('tab');

hideTabsContent(1);

function hideTabsContent(a){
    for(var i=a; i<tabContent.length;i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}



document.getElementById('tabs').onclick=function(e){
    var target = e.target;
    
    if(target.className=='tab'){
        for(var i=0; i<tab.length;i++){
            if(target == tab[i]){
                 
                showTabsContent(i);
                break;
            }
        }
    }
}


function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        
    }
}

//Tabs end






//slider start

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

var next = document.getElementsByClassName('next');
var prev = document.getElementsByClassName('prev');


function nextSlide1() {
    if (currentSlide > slides.length) currentSlide = 0;
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';

}

function prevSlide1() {
   if (currentSlide  == 0) currentSlide = slides.length;
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide - 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}


//slider end

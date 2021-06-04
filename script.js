window.onscroll = function(){
    if(window.scrollY < 140){
        document.getElementById('nav').classList.add('transparent-nav');
        document.getElementById('nav').classList.remove('beige-nav');
        document.getElementById('nav').classList.remove('black-nav');
    }
    if(window.scrollY >= 140){
        document.getElementById('nav').classList.add('beige-nav');
        document.getElementById('nav').classList.remove('transparent-nav');
        document.getElementById('nav').classList.remove('black-nav');
    }
    if(window.scrollY >= 510){
        document.getElementById('nav').classList.add('black-nav');
        document.getElementById('nav').classList.remove('transparent-nav');
        document.getElementById('nav').classList.remove('beige-nav');
    }
}
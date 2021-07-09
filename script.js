window.onscroll = function(){
    if(window.scrollY < 140){
        document.getElementById('header').classList.add('transparent-nav');
        document.getElementById('header').classList.remove('beige-nav');
        document.getElementById('header').classList.remove('black-nav');
    }
    if(window.scrollY >= 140){
        document.getElementById('header').classList.add('beige-nav');
        document.getElementById('header').classList.remove('transparent-nav');
        document.getElementById('header').classList.remove('black-nav');
    }
    if(window.scrollY >= 550){
        document.getElementById('header').classList.add('black-nav');
        document.getElementById('header').classList.remove('transparent-nav');
        document.getElementById('header').classList.remove('beige-nav');
    }
}
function search(){
    document.getElementById('page').classList.toggle('disappear');
    document.getElementById('searching').classList.toggle('d-flex');
}
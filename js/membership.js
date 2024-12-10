$(function () {
    let viewHeight = document.querySelector('html').clientHeight;
        const content = document.querySelectorAll('.content');
        const img = document.querySelectorAll('.img');

        window.addEventListener('scroll',function(){
        if(content[0].getBoundingClientRect().top < viewHeight/2){
        img[0].classList.add('opacity1');
        }

        for(i = 1; i < content.length - 1; i++){
        if(content[i].getBoundingClientRect().top < viewHeight/2 && content[i].getBoundingClientRect().top > -viewHeight/2){
            img[i].classList.add('opacity1');
        } else{
            img[i].classList.remove('opacity1');
        }
        }

        if(content[content.length - 1].getBoundingClientRect().top < viewHeight/2){
        img[content.length - 1].classList.add('opacity1');
        } else{
        img[content.length - 1].classList.remove('opacity1');
        }
        });

});

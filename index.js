var buttons=document.querySelectorAll('.drum');
buttons.forEach(function(button){
    button.addEventListener('click',function (){
        
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    
});


document.addEventListener('keydown',function(e){
        var key=e.key;
        makeSound(key);
        buttonAnimation(key);
        
        
    });

    function  makeSound(key){
        switch (key) {
            case 'w':
                var audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'a':
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            case 's':
                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case 'd':
                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'j':
                var audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 'k':
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'l':
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
        }
    }

function buttonAnimation(key){
    var active=document.querySelector("."+key);
    active.classList.add('buttonanimation');
    setTimeout(function (){
        active.classList.remove('buttonanimation');
    },100);
}
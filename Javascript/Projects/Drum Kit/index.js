function makeSound(key)
{
    switch(key)
    {
        case 'w':
                {
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                }
            case 'a':
                {
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
                }
            case 's':
                {
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
                }
            case 'd':
                {
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
                }
            case 'j':
                {
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
                }
            case 'k':
                {
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
                }
            case 'l':
                {
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
                }
            default:
                {
                    console.log(key.key);
                }
    }
}


// button check
let size = document.querySelectorAll('button').length;

for(let i = 0; i <size; ++i)
{
    // passing function as an input, instead of calling it for it to use later and not call it once
    document.querySelectorAll('button')[i].addEventListener('click', function()
    {           // f, and not f()
    var buttonInnerHTML = this.textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    }
    );
}



// key check
document.addEventListener("keydown", function(event){
    let keyButton = event.key;
    makeSound(keyButton);
    buttonAnimation(keyButton);
})



function buttonAnimation(currentKey)
{
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },100);

}

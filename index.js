var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case 'w':
        var address="sounds/tom-1.mp3";
        var tom1=new Audio(address);
        tom1.play();
      break;

    case 'a':
        var address="sounds/tom-2.mp3";
        var tom2=new Audio(address);
        tom2.play();
      break;

    case 's':
        var address="sounds/tom-3.mp3";
        var tom3=new Audio(address);
        tom3.play();
      break;

    case 'd':
        var address="sounds/tom-4.mp3";
        var tom4=new Audio(address);
        tom4.play();
      break;

    case 'j':
        var address="sounds/snare.mp3";
        var snare=new Audio(address);
        snare.play();
      break;

    case 'k':
        var address="sounds/crash.mp3";
        var crash=new Audio(address);
        crash.play();
      break;

    case 'l':
        var address="sounds/kick-bass.mp3";
        var kick=new Audio(address);
        kick.play();
      break;

    default:
      console.log(key);
  }
}


function buttonAnimation(currentKey){
  var activeButton=document.querySelector('.'+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}

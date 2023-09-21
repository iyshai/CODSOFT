//using CoustomFuntion yaa

function customAudio(fileName){
    this.fileName = fileName;
    this.play2 = function play(){
        var audio = new Audio(fileName);
        audio.play();
     
    }
}




var audio00 = new customAudio("sounds/crash.mp3");
var audio01 = new customAudio("sounds/kisck-bass.mp3");
var audio02 = new customAudio("sounds/snare.mp3");
var audio03 = new customAudio("sounds/tom-1.mp3");
var audio04 = new customAudio("sounds/tom-2.mp3");
var audio05 = new customAudio("sounds/tom-3.mp3");
var audio06 = new customAudio("sounds/tom-4.mp3");

// var x = document.querySelectorAll('.drum').length;
// for (let index = 0; index < x; index++) {
//     document.querySelectorAll(".drum")[index].addEventListener("click",function(){
//         audio00.play2();
//     });  
// }
var buttonClicked = document.querySelectorAll(".drum").length;

for (let x = 0; x < buttonClicked; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click",function(){

        var button = this.innerHTML;

        switch (button) {
            case "w":
                audio00.play2();
                break;
            case "a":
                audio01.play2();
                break;
            case "s":
                audio02.play2();
                break;
            case "d":
                audio03.play2();
                break;    
            case "j":
                audio04.play2();
                    break; 
            case "k":
                audio05.play2();
                break;
            case "l":
                audio06.play2();
                break;           
            default:
                break;
        }


    });
    
}


var buttonClicked = document.querySelectorAll(".drum").length;

for (let x = 0; x < buttonClicked; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("keydown",function(event){

        

        switch (event.key) {
            case "w":
                audio00.play2();
                break;
            case "a":
                audio01.play2();
                break;
            case "s":
                audio02.play2();
                break;
            case "d":
                audio03.play2();
                break;    
            case "j":
                audio04.play2();
                    break; 
            case "k":
                audio05.play2();
                break;
            case "l":
                audio06.play2();
                break;           
            default:
                break;
        }


    });
    
}




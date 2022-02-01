const hamMenu = document.querySelector('#ham');
const mainMenu = document.querySelector('.ham-menu');
const mobileHead = document.querySelector('#mobileHead')
console.log(hamMenu);
console.log(mainMenu);

hamMenu.addEventListener('click', function(e){
    if(mainMenu.style.display == "none"){
        mainMenu.style.display = "block";
    }else{
        mainMenu.style.display = "none"
    }
});
document.addEventListener( 'DOMContentLoaded', function() {

    console.log( 'Script loaded!' );
    handleFloatingLabel();
});


function handleFloatingLabel() {

let input = document.querySelector(".js-name-input");
    label = document.querySelector(".js-floating-label");

input.addEventListener('blur', function(){
    console.log(event);
    if(input.value){
       
        label.classList.add("is-floating");
    }
    else{
        label.classList.remove("is-floating");
    }
});
}



function handlePasswordSwitcher(){

let passwordInput = document.querySelector(".c-password-toggle__checkbox");
    passwordToggle = document.querySelector(".c-password-toggle__label");


    if(passwordInput.checked){
        
    }
    else{
        
    }
}


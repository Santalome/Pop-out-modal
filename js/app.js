
window.onload = function(){

    let emailState = false;

    let emailModal = document.getElementsByClassName('email-modal')[0];

    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];

    let emailInput = document.getElementsByClassName('email-modal__input')[0];

    let emailButton = document.getElementsByClassName('email-modal__button')[0];

    let email

    function emailIsValid (email){
        return /\S+@\S+\.\S+/ .test(email);
    }

    emailButton.addEventListener('click', () =>{
        if(emailIsValid(emailInput.value)){
            console.log(emailInput.value);
        }else{
            document.getElementsByClassName('email-modal__form-group')[0].classList.add
            ('email-modal__form-group--error');
            document.getElementsByClassName('email-modal__error-message')[0].classList.add
            ('email-modal__error-message--active');
        }
        
    })

    closeButton.addEventListener('click', () =>{
        emailModal.classList.remove('email-modal--visible');
    });

    document.body.addEventListener('mouseleave', () => {
        if(emailState == false){
            emailModal.classList.add('email-modal--visible');
            emailState = true;
        }
    });
    
    
}
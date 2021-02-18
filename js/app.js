document.addEventListener('DOMContentLoaded', () => {
    const btnB2B = document.querySelector('.B2B--offer-toggle');
    const btnB2B2C = document.querySelector('.B2B2C--offer-toggle');
    const btnB2bOffer = document.querySelector('.B2B--offer');
    const btnB2b2cOffer = document.querySelector('.B2B2C--offer');



    btnB2B.addEventListener("click",()=>{
        btnB2bOffer.classList.add("offer--active");
           if (btnB2b2cOffer.classList.contains("offer--active")){
            btnB2b2cOffer.classList.toggle("offer--active");
           }
    }) 
    btnB2B2C.addEventListener("click",()=>{       
        btnB2b2cOffer.classList.add("offer--active");
            if(btnB2bOffer.classList.contains("offer--active")){
                btnB2bOffer.classList.toggle("offer--active");
            }
    }) 

});

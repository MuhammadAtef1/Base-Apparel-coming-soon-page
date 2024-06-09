let emailInput = document.querySelector(".email-input");
let submitBtn = document.querySelector(".submit-arrow");
let errorImg = document.querySelector(".input-arrow img");
let errorMsg = document.querySelector(".error-msg");



let reg = /^\w+\d?@\w+\.(com|net|eg)$/ig ;


submitBtn.addEventListener("click",function(){
    if (!emailInput.value.match(reg)) {
        errorImg.style.display = "block";
        errorMsg.style.display = "block";
        console.log("error");
    }
    else {
        errorImg.style.display = "none";
        errorMsg.style.display = "none";
        emailInput.value = "" ;
    }
})
let password = document.querySelector("#password")
let body = document.querySelector(".back_img")


password.addEventListener(`input`, e=>{
    const input = e.target.value;
    const length = input.length;
    const blurness = 20 - length * 2;
    body.style.filter=`blur(${blurness}px)`
})
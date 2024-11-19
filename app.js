let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let input = document.querySelector("#qrtext");
let imgbox = document.querySelector("#imgbox");
let img = document.querySelector("#qrimg");
let btn = document.querySelector("#genqr");
let p = document.querySelector(".container p");

btn.addEventListener("click" , async() => {
    let inval = input.value;
    if(inval.length === 0){
       return alert("please enter something");
    }
    let fullapi = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inval}`;
    img.setAttribute("src" , fullapi);
    imgbox.classList.add("show-img");

    p.innerText =`Here is you QR for ${inval}`;
})
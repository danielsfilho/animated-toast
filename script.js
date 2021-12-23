
let registerButton = document.querySelector("#registerButton")

let toast = document.querySelector(".toast")

let tableInfo = document.querySelector("#tableInfo")

function removerToast() {
    toast.classList.remove("visible")
}

registerButton.onclick =  function (){
    toast.classList.add("visible",)  
    toast.innerHTML = `${tableInfo.value} task was successfully registered!`
    setTimeout(removerToast, 5000)
}


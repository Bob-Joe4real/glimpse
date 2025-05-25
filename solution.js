const btn2 = document.querySelector(".G")
function alertUser(){
    alert("Welcome to Glimpse Solution. how can we help You?")
}
btn2.addEventListener("click", alertUser)

function togglePopup(){
    const overlay = document.getElementById('popupOverlay');
overlay.classList.toggle('show');
}

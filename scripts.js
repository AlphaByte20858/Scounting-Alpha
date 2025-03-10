let buttonClimbTeleop;
let buttonClimbAuto;


function updateScore(id, delta) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    currentValue = Math.max(0, currentValue + delta);
    input.value = currentValue;
}


function setClimbAuto(number){
    clearClimbAutoButtons()
    buttonClimbAuto = number;
    document.getElementById(buttonClimbAuto).classList.toggle("btn-primary");
    document.getElementById("AutoClimb").value = number;
    console.log(document.getElementById("AutoClimb").value)
}

function setClimbTeleop(number){
    clearClimbTeleopButtons()
    buttonClimbTeleop = number;
    document.getElementById(buttonClimbTeleop).classList.toggle("btn-primary");
    document.getElementById("TeleopClimb").value = number;
    console.log(document.getElementById("TeleopClimb").value)
}
    
function getAllValues(){
    const teamNumber = parseInt(document.getElementById('teamNumber').value);
    const roundNumber = parseInt(document.getElementById('roundNumber').value);
    const netAutoSample = parseInt(document.getElementById('netAutoSample').value);
    const lowAutoSample = parseInt(document.getElementById('lowAutoSample').value);
    const highAutoSample = parseInt(document.getElementById('highAutoSample').value);
    const lowAutoSpecimen = parseInt(document.getElementById('highAutoSample').value);
    const netTeleopSample = parseInt(document.getElementById('highAutoSample').value);
    const lowTeleopSample = parseInt(document.getElementById('highAutoSample').value);
    const highTeleopSample = parseInt(document.getElementById('highTeleopSample').value);
    const lowTeleopSpecimen = parseInt(document.getElementById('lowTeleopSpecimen').value);
    const highTeleopSpecimen = parseInt(document.getElementById('highTeleopSpecimen').value);
}

function clearClimbAutoButtons(){
    document.getElementById("buttonClimbAuto0").classList.remove("btn-primary");
    document.getElementById("buttonClimbAutoObs").classList.remove("btn-primary");
    document.getElementById("buttonClimbAutoAsc").classList.remove("btn-primary");
    document.getElementById("buttonClimbAuto0").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbAutoObs").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbAutoAsc").classList.add("btn-outline-primary");
}

function clearClimbTeleopButtons(){
    document.getElementById("buttonClimbTeleop0").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleopObs").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop1").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop2").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop3").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop0").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleopObs").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop1").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop2").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop3").classList.add("btn-outline-primary");
}

var form = document.getElementById('meuFormulario');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.ariaDescription, {
        method : "POST",
        body: new FormData(document.getElementById("meuFormulário")),

    } ).then(
        response => response.json()
    ).then((html) => {alert('sucess')})
})
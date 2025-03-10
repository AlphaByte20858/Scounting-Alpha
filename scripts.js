let buttonClimbTeleop;
let buttonClimbAuto;


function updateScore(id, delta) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    currentValue = Math.max(0, currentValue + delta);
    input.value = currentValue;
}


function setClimbAuto(state){
    clearClimbAutoButtons()
    buttonClimbAuto = state;
    document.getElementById(buttonClimbAuto).classList.toggle("btn-primary");
    switch (state){
        case "buttonClimbAuto0":
            document.getElementById("AutoClimb").value = "Não Estacionou"
            break;
        case "buttonClimbAutoObs":
            document.getElementById("AutoClimb").value = "Observação"
            break;
        case "buttonClimbAutoAsc":
            document.getElementById("AutoClimb").value = "Ascent"
            break
    }
    console.log(document.getElementById("AutoClimb").value)
}

function setClimbTeleop(state){
    clearClimbTeleopButtons()
    buttonClimbTeleop = state;
    document.getElementById(buttonClimbTeleop).classList.toggle("btn-primary");
    switch (state){
        case "buttonClimbTeleop0":
            document.getElementById("TeleopClimb").value = "Não climbou"
            break;
        case "buttonClimbTeleopObs":
            document.getElementById("TeleopClimb").value = "Observação"
            break;
        case "buttonClimbTeleop1":
            document.getElementById("TeleopClimb").value = "Climb Level 1"
            break;
        case "buttonClimbTeleop2":
            document.getElementById("TeleopClimb").value = "Climb Level 2"
            break;
        case "buttonClimbTeleop3":
            document.getElementById("TeleopClimb").value = "Climb Level 3"
            break;    
    }
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
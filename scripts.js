let buttonClimbTeleop;
let buttonClimbAuto;
let teleopScore = 0;
let autoScore = 0;
let penaltyScore = 0;
let totalScore = 0;
let climbScore = 0;



function updateScore(id, delta) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    currentValue = Math.max(0, currentValue + delta);
    input.value = currentValue;
}


function setClimbAuto(state){
    clearClimbAutoButtons()
    buttonClimbAuto = state;
    document.getElementById(state).classList.toggle("btn-primary");
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

function setClimbScore(){
    state = document.getElementById("TeleopClimb").value;
    console.log(state)
    switch (state){
        case "Não climbou":
            climbScore = 0;
            break;
        case "Observação":
            climbScore = 3;
            break;
        case "Climb Level 1":
            climbScore = 3;
            break;
        case "Climb Level 2":
            climbScore = 15;
            break;
        case "Climb Level 3":
            climbScore = 30;
            break; 
    }
    console.log(climbScore)
}
function setTeleopScore(){
    let netTeleopSample = parseInt(document.getElementById('netTeleopSample').value);
    let lowTeleopSample = parseInt(document.getElementById('lowTeleopSample').value);
    let highTeleopSample = parseInt(document.getElementById('highTeleopSample').value);
    let lowTeleopSpecimen = parseInt(document.getElementById('lowTeleopSpecimen').value);
    let highTeleopSpecimen = parseInt(document.getElementById('highTeleopSpecimen').value);

    teleopScore = (netTeleopSample * 2) + (lowTeleopSample * 4) + (highTeleopSample *8) + (lowTeleopSpecimen *6) + (highTeleopSpecimen*10);
}
function setAutoScore(){
    let netAutoSample = parseInt(document.getElementById('netAutoSample').value);
    let lowAutoSample = parseInt(document.getElementById('lowAutoSample').value);
    let highAutoSample = parseInt(document.getElementById('highAutoSample').value);
    let lowAutoSpecimen = parseInt(document.getElementById('lowAutoSpecimen').value);
    let highAutoSpecimen = parseInt(document.getElementById('highAutoSpecimen').value);
    let climb;
    state = document.getElementById("AutoClimb").value;
    switch (state){
        case "Não Estacionou":
            climb = 0;
            break;
        case "Observação":
            climb = 3;
            break;
        case "Ascent":
            climb = 3;
            break
    }

    autoScore = (netAutoSample * 4) + (lowAutoSample * 8) + (highAutoSample * 16) + (lowAutoSpecimen *12) + (highAutoSpecimen*20) + climb;
}

function setPenaltyScore(){
    let highPenalty = parseInt(document.getElementById('highPenalty').value);
    let lowPenalty = parseInt(document.getElementById('lowPenalty').value);

    penaltyScore = (lowPenalty * 5) + (highPenalty * 15)
}

function setTotalScore(){
    totalScore = parseInt(autoScore + teleopScore + climbScore)
}

function setScores(){
    setClimbScore()
    setAutoScore()
    setTeleopScore()
    setTotalScore()
    setPenaltyScore()
    document.getElementById("PontuacaoTotal").value = totalScore
    document.getElementById("PontuacaoAutonomo").value = autoScore
    document.getElementById("PontuacaoClimb").value = climbScore
    document.getElementById("PontuacaoTeleop").value = teleopScore
    document.getElementById("PontuacaoPenalidade").value = penaltyScore



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

function handleFormSubmit(event) {

    setScores()
    
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Envia os dados do formulário para o SheetDB
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Formulário enviado com sucesso
        alert('Dados enviados com sucesso!');
        form.reset(); // Reseta o formulário
        window.location.href = "https://alphabyte20858.github.io/Scounting-Alpha/"; // Volta para a página inicial
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
    });
}
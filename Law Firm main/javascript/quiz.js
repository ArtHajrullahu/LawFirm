function mode(){
    var kodi = parseInt(prompt("Shtypni kodin per Online Mode:"))
if(kodi == 1){
   kuizi();
}
else{
    alert("Nuk mund te kyqeni ne Online Mode")
}
}

function kuizi(){
    alert("Welcome to our quiz!!!!")
    let score = 0;

    var pytja1 = prompt("Kush e formoi kete ekip: ")
    switch(pytja1){
        case "Adnani":
            alert("Pergjigjja e sakte")
            score += 10;
            break;
        default:
            alert("Pergjigjja e pasakte")
    }

    var pytja2 = parseFloat(prompt("Sa asistent ka ekipi ynë: "))
    switch(pytja2){
        case "2":
            alert("Pergjigjja e sakte")
            score += 10;
            break;
        default:
            alert("Pergjigjja e pasakte")
            score -= 1;
            break;
    }

    var pytja3 = prompt("Sa avokat jane gjithsej ne ekipin tone?")
   switch(pytja3){
    case "4":
        alert("Pergjigje e sakte")
        score += 10;
        break;
    default:
        alert("Pergjigje e pasakte")
        score += -1;
        break;
   }
}
function offlineMode(){
    alert("Nuk mund te kyçeni ne offline mode")
}
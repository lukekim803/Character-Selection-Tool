
document.getElementById("gen-btn").addEventListener("click",calculate);

function calculate()
{

    const playerWeaponSelector = document.getElementById("player-weapon");
    let weapchoice = playerWeaponSelector.value;

    var value1 = document.getElementById("player-abil").value;
    var value2 = document.getElementById("player-weap").value;
    var value3 = document.getElementById("player-trait").value;
    var value4 = document.getElementById("player-eyecolor").value;

    //var result = value1 + " " + value2 + " " + value3 + " " + value4 + "";

    //document.getElementById("result").innerHTML = "Result : " + result;

    if(value1 == "player-flight" || value1 == "player-morph") {
        score++;
    }

    if(value2 == "weap-sword" || value2 == "weap-gun"){

    }
    if(value3 == "player-strength" || value3 == "player-swift"){

    }
    if(value4 == "player-aquamarine" || value4 == "player-orange"){

    }
    else{
        document.getElementById("result").innerHTML = "Something";
    }

    



}








  

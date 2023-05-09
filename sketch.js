window.onload=function(){

    const mainBtn = document.getElementById("gen-btn");
    mainBtn.addEventListener("click",calculate);
      }


function calculate()
{

    // const playerWeaponSelector = document.getElementById("player-weapon");
    // let weapchoice = playerWeaponSelector.value;

    var value1 = document.querySelector(".player-abil").value;
    var value2 = document.querySelector(".player-weapon").value;
    var value3 = document.querySelector(".player-traits").value;
    var value4 = document.querySelector(".player-eyecolor").value;

    //var result = value1 + " " + value2 + " " + value3 + " " + value4 + "";

    //document.getElementById("result").innerHTML = "Result : " + result;

    // if(value1 == "player-flight" || value1 == "player-morph") {
        
    // }

    // if(value2 == "weap-sword" || value2 == "weap-gun"){

    // }
    // if(value3 == "player-strength" || value3 == "player-swift"){

    // }
    // if(value4 == "player-aquamarine" || value4 == "player-orange"){

    // }
    // else{
    //     document.getElementById("result").innerHTML = "Something";
    // }

    if(value1 == "player-flight" && value2 == "weap-sword" && value3 == "player-strength" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Melody of the Angelic Realms";
    }
    if(value1 == "player-flight" && value2 == "weap-gun" && value3 == "player-swift" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Grim the Sigma";
    } 
    if(value1 == "player-flight" && value2 == "weap-gun" && value3 == "player-strength" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Fireborn of the Skies";
    }
    if(value1 == "player-flight" && value2 == "weap-gun" && value3 == "player-strength" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Mery the Stigma";
    }
    if(value1 == "player-flight" && value2 == "weap-sword" && value3 == "player-swift" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Shega";
    }
    if(value1 == "player-flight" && value2 == "weap-sword" && value3 == "player-swift" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Kiriko";
    }
    if(value1 == "player-heal" && value2 == "weap-sword" && value3 == "player-swift" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Kiriko";
    }
    if(value1 == "player-heal" && value2 == "weap-sword" && value3 == "player-strength" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Lifesight";
    }
    if(value1 == "player-heal" && value2 == "weap-gun" && value3 == "player-strength" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Mhora";
    }
    if(value1 == "player-heal" && value2 == "weap-gun" && value3 == "player-strength" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Kiti";
    }
    if(value1 == "player-heal" && value2 == "weap-sword" && value3 == "player-strength" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Lifeline";
    }
    if(value1 == "player-heal" && value2 == "weap-sword" && value3 == "player-swift" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Cyro";
    }
    if(value1 == "player-heal" && value2 == "weap-gun" && value3 == "player-swift" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Voidwalker";
    }
    if(value1 == "player-heal" && value2 == "weap-gun" && value3 == "player-swift" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Pailos";
    }
    if(value1 == "player-flight" && value2 == "weap-gun" && value3 == "player-swift" && value4 == "player-aquamarine"){
        document.getElementById("result").innerHTML = "Raina";
    }
       if(value1 == "player-flight" && value2 == "weap-sword" && value3 == "player-strength" && value4 == "player-orange"){
        document.getElementById("result").innerHTML = "Falcone";
    }
    

    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(value4)

}

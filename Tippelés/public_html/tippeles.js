function tippeles() {
    
    var szam = document.getElementById("szam").value;
    var random = Math.floor( Math.random() * 101 ) + 1;
    var valasz;

    if (szam < random){
        valasz = "A tippelt szám kisebb.";
    }
    else if (szam === random){
        valasz = "Jól tippeltél.";
    }
    else if (szam > random){
        valasz = "A tippelt szám nagyobb.";
    }

    document.getElementById("eredmeny").innerHTML = valasz;
 

}
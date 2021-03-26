function pozicio(a){
    var y = 10;
    var x = 150;
    var gomb = document.getElementById(a.id).value;
try{   
    switch (gomb){
        case "Fel":
            x-10;
            document.getElementById("elem").style.top = x;
            break;
        case "Le":
            x+10;
            document.getElementById("elem").style.top = x;
            break;
        case "Jobbra":
            y+10;
            document.getElementById("elem").style.left = y;
            break;
        case "Balra":
            y-10;
            document.getElementById("elem").style.left = y;
            break;
        case "Elrejt":
            document.getElementById("elem").style.visibility = "hidden";
            break;
        case "Felfed":
            document.getElementById("elem").style.visibility = "visible";
            break;
        default:
            break;
    }
}
catch(err){
    window.alert(err);
}
    
}
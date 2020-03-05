var corrette = ["53","Coppa UEFA/Europa League","GRE-NO-LI","Milanello",
"Alfred Edwars","1986","Roberto Donadoni","Sporting Lisbona","1998","Hellas Verona"];
var risposte_corrette = 0;
var id = "";
function correggi(){
    //ri setto tutti i background a white
    for(var i = 1; i<11;i++)
    {
    
        for(var j = 1; j<4; j++)
        {
            id = j+"G"+i;
            document.getElementById(id + "G" + i ).style.background= "white";
            document.getElementById(id + "G" + i).style.color = "black"
        }
    }
    risposte_corrette = 0;
    for(var i = 1; i<11;i++)
    {
    
        for(var j = 1; j<4; j++)
        {
            
            id = j+"G"+i;
            //console.log(cerca(document.getElementById(id).value))
            if(document.getElementById(id).checked && corrette.includes(document.getElementById(id).value))
            {
                risposte_corrette++;
                document.getElementById(id + "G" + i ).style.background= "green";
                document.getElementById(id + "G" + i).style.color = "white";
            } else if(document.getElementById(id).checked)
            {
                document.getElementById(id + "G" + i ).style.background= "red";
                document.getElementById(id + "G" + i).style.color = "white";
            }
                
            
        }
        
    }

    if(risposte_corrette == 10){
        document.getElementById("Success_Alert").style.display = "block";
        document.getElementById("UnSuccess_Alert").style.display = "none";
    }
    else{
        document.getElementById("UnSuccess_Alert").style.display = "block";
        document.getElementById("Success_Alert").style.display = "none";
    }
        
}
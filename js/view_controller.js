
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: toDo
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: toDo
    Bild austauschen :: CHECK
*/

// Modul Ablaufsteuerung | Test:
//controller()



// Trigger - Btn 


// Trigger - Input


// Event-Dispatcher


// Modul: Check auf korrekte Eingaben ...


// Modul: Eingabe | Test:


//Modul: Business-Logic (Mapping) | Test:


// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("wein"));
function updateImg(imgName)
{
    let img = document.getElementById("bevImg");
    img.src = "./bilder/"+imgName+".jpg";
    return imgName; // only for monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}
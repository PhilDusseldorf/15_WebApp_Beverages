
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: toDo
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: toDo
    Bild austauschen :: CHECK
*/

// Modul Ablaufsteuerung | Test:
// controller()
function controller()
{
    ausgabe(updateImg(checkAge(getInput())));
}


// Trigger - Btn 


// Trigger - Input


// Event-Dispatcher


// Modul: Check auf korrekte Eingaben ...


// Modul: Eingabe | Test:
ausgabe(getInput());
function getInput()
{
    return 2;
}

//Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(7));
// ausgabe(checkAge(16));
// ausgabe(checkAge(101));
// ausgabe(checkAge(115));
function checkAge(age)
{
    //SWITCH für Alter
    switch (true) {
        case (age >= data.milk.lower && age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower && age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower && age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower && age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}

// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("wein"));
function updateImg(imgName)
{
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; // only for monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}
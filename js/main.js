var liczba1 = 7;
var liczba2 = -5;
var wynikDodawania = liczba1 + liczba2;
var wynikOdejmowania = liczba1 - liczba2;
var wynikMnozenia = liczba1 * liczba2;

function wyswietl(){
    if (liczba1 + liczba2 && wynikDodawania >= 0){
        console.log("Wynik dodawania wynosi:" + " " + wynikDodawania)
    }else{
        console.log("Wynik jest ujemny")
    }

    if (liczba1 - liczba2 && wynikOdejmowania >= 0){
        console.log("Wynik odejmowania wynosi:" + " " + wynikOdejmowania)
    }else{
        console.log("Wynik jest ujemny")
    }
    if (liczba1 * liczba2 && wynikMnozenia >= 0){
        console.log("Wynik mnożenia wynosi:" + " " + wynikMnozenia)
    }else{
        console.log("Wynik jest ujemny")
    }
}

console.log(wyswietl());
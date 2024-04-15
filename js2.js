function convertToCelsius(faren) {
    var faren = prompt("what is the temperature in farenheit?");
    var celcius = faren - 32 * 5/9;
    return alert(celcius + "° celcius ")
}
convertToCelsius()

function createMessage(faren , celcius) {
    faren = prompt("enter a number in farenheit again");
    celcius = faren - 32 * 5/9 ; 

    if(faren<=30) {
        return alert("If it's " + faren + "°F then it's " + celcius + "°C, it's very cold, don't forget a coat")
     } else if (faren<=64) {
        return alert("If it's "+ faren + "°F then it's " + celcius + "°C, it's cold outside, be careful ")
        } else if (faren<=86) {
        return alert ("if it's "+ faren + " °F then it's " + celcius + "°C, it's warm outside, bring your sunglasses" )
        } else {
            return alert("If it's "+ faren + "°F then it's " + celcius + " °C, it's hot outside, remember your sunscreen")
        }
    
}
createMessage()

function rand(){
    var random= Math.floor(Math.random()*101);
    return alert(random)
}
rand();
function HandleConverterValue(){
    let Moeda = parseInt(document.querySelector("#Moeda").value);
    let operation = document.querySelector("select").value
    let convertion = document.querySelector("h2")
    
    switch(operation) {
        case "USD":
            conversao = Moeda * 5.19
            convertion.innerHTML = `Na cotação atual, ${Moeda} BRL equivale a ${conversao.toFixed(2)} USD`;
            break;
        case "EUR":
            conversao = Moeda * 5.91; 
            convertion.innerHTML = `Na cotação atual, ${Moeda} BRL equivale a ${conversao.toFixed(2)} EUR`;
            break;
        case "GBP":
            conversao = Moeda * 6.85; 
            convertion.innerHTML = `Na cotação atual, ${Moeda} BRL equivale a ${conversao.toFixed(2)} GBP`;
            break;
    }
}
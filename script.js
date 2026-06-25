function HandleConverterValue(){
    let coin = parseInt(document.querySelector("#coin").value);
    let operation = document.querySelector("select").value
    let convertion = document.querySelector("h2")
    
    if(coin === 0 || isNaN(coin)){
        alert("Digite um valor válido")
    return}
    
    switch(operation) {
        case "USD":
            conversao = coin * 5.19
            convertion.innerHTML = `Na cotação atual, ${coin} USD equivale a ${conversao.toFixed(2)} BRL`;
            break;
        case "EUR":
            conversao = coin * 5.91; 
            convertion.innerHTML = `Na cotação atual, ${coin} EUR equivale a ${conversao.toFixed(2)} BRL`;
            break;
        case "GBP":
            conversao = coin * 6.85; 
            convertion.innerHTML = `Na cotação atual, ${coin} GBP equivale a ${conversao.toFixed(2)} BRL`;
            break;
    }
}
//definindo padrão do tempo pelas variaveis
let prato = "pipoca"
let tempoCliente = 19
let tempoPrato = 0
let tempoUsado = 0

//Checando o prato do cliente
if (prato != "pipoca" && "carne" && "feijão" && "brigadeiro" && "macarrão"){
        console.log("Prato inexistente!")

}

//Definindo o tempo padrão de cada prato e qual tempo usar
if(prato == "pipoca"){
        tempoPrato = 10
        tempoUsado = tempoPrato
        console.log("Prato pronto, bom apetite!!!")

}if(prato == "macarrão"){
        tempoPrato = 8
        tempoUsado = tempoPrato
        console.log("Prato pronto, bom apetite!!!")

}if(prato == "carne"){
        tempoPrato = 15
        tempoUsado = tempoPrato
        console.log("Prato pronto, bom apetite!!!")

}if(prato == "feijão"){
        tempoPrato = 12
        tempoUsado = tempoPrato
        console.log("Prato pronto, bom apetite!!!")

}if(prato == "brigadeiro"){
        tempoPrato = 8
        tempoUsado = tempoPrato
        console.log("Prato pronto, bom apetite!!!")
}else{
        tempoUsado = tempoCliente
}

//Condição para o prato queimar
if(prato == "pipoca" && tempoUsado >= 2 * tempoPrato){
        console.log("A comida queimou!")
}if(prato == "feijão" && tempoUsado >= 2 * tempoPrato){
        console.log("A comida queimou!")
}if(prato == "brigadeiro" && tempoUsado >= 2 * tempoPrato){
        console.log("A comida queimou!")
}if(prato == "macarrão" && tempoUsado >= 2 * tempoPrato){
        console.log("A comida queimou!")
}if(prato == "carne" && tempoUsado >= 2 * tempoPrato){
        console.log("A comida queimou!")
}

//Condição para o tempo insuficiente do prato
if(prato == "pipoca" && tempoUsado < tempoPrato){
        console.log("tempo insuficiente")
}if(prato == "feijão" && tempoUsado < tempoPrato){
        console.log("tempo insuficiente")
}if(prato == "brigadeiro" && tempoUsado < tempoPrato){
        console.log("tempo insuficiente")
}if(prato == "macarrão" && tempoUsado < tempoPrato){
        console.log("tempo insuficiente")
}if(prato == "carne" && tempoUsado < tempoPrato){
        console.log("tempo insuficiente")
}

//Condições para o "Kabummm"
if(prato == "pipoca" && tempoUsado >= 3 * tempoPrato){
        console.log("Kabummm!!!")
}if(prato == "feijão" && tempoUsado >= 3 * tempoPrato){
        console.log("Kabummm!!!")
}if(prato == "brigadeiro" && tempoUsado >= 3 * tempoPrato){
        console.log("Kabummm!!!")
}if(prato == "macarrão" && tempoUsado >= 3 * tempoPrato){
        console.log("Kabummm!!!")
}if(prato == "carne" && tempoUsado >= 3 * tempoPrato){
        console.log("Kabummm!!!")
}


//Checando valores
console.log ("Tempo escolhido pelo cliente: ",tempoCliente)
console.log ("Tempo padrão do prato escolhido: ",tempoPrato)
console.log ("Tempo utilizado pelo microondas: ",tempoUsado)


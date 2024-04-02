let numero = Number(prompt("Digite um numero inteiro."))


function perfeito (numero){
    
    let somaDivisiveis = 1

    for(i=2; i<numero; i++) {

        let verificacao = numero%i

        if(verificacao == 0){
            somaDivisiveis += i

        }

        
    }
    
   

    if(somaDivisiveis == numero){
        console.log(`${numero} é um numero perfeito.`)
    }
    else{
        console.log(`${numero} não é um numero perfeito.`)
    }
    return

}


perfeito(numero)
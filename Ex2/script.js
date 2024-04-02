    let numero = Number(prompt("Digite um numero inteiro."))


    function parOuImpar (numero){
        
        let calculo = numero%2
        
        if(calculo == 0){
            console.log("Verdadeiro")
        }   

        else{
            console.log("Falso")
        }
        return
    }

    
parOuImpar(numero)

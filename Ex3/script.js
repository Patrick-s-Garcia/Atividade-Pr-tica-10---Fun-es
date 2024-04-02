    let numero = Number(prompt("Digite um numero inteiro."))


    function primo (numero){
        
        let divisivel = 0

        for(i=2; i<numero; i++) {

            let verificacao = numero%i

            if(verificacao == 0){
                divisivel++
            }

            
        }
        
        if(divisivel == 0){
            console.log("Verdadeiro")
        }
        else{
            console.log("Falso")
        }
        return

    }

    
primo(numero)

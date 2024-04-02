    let duracao = Number(prompt("Digite o tempo de duração em segundos."))


    function conversao (numero){
        
        let minutos = (numero/60).toFixed(2)
        let horas = (minutos/60).toFixed(2)

        console.log(`Segundos => ${numero}`)
        console.log(`Minutos => ${minutos}`)
        console.log(`Horas => ${horas}`)

        return

    }

    
conversao(duracao)

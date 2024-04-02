    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno."))
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno."))
    let nota3 = parseFloat(prompt("Digite a terceira nota do aluno."))
    let metodo = prompt("Digite o método de média. A - Aritimética P - Ponderada. ").toLocaleLowerCase()

    let mediaCalculada = 0

    function media (nota1, nota2, nota3, letra){
        if(letra == "a"){
            mediaCalculada = ((nota1 + nota2 + nota3)/3).toFixed(2)
        }   
        else if(letra == "p"){

            mediaCalculada = (((nota1*5) + (nota2*3) + (nota3*2))/(5+3+2)).toFixed(2)
        }
        else{
            alert("Dados invalidos.")
        }
        return
    }

    media(nota1, nota2, nota3, metodo)

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(metodo.toUpperCase())
    console.log(mediaCalculada)



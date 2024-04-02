let nota1 = 5
let nota2 = 10
let nota3 = 8
let nome = "João"



function media(nota1, nota2, nota3, nome){
    
    let calculo = ((nota1+nota2+nota3)/3).toFixed(2)
    
    alert(`${nome}, sua média é de ${calculo}`)
    console.log(`Nota1 = ${nota1}`)
    console.log(`Nota2 = ${nota2}`)
    console.log(`Nota3 = ${nota3}`)
    
    return

}


media(nota1,nota2,nota3,nome)
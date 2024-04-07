
/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/

function levelCalculate(win, lose) {
    return win - lose;
}

let victoryBalance = levelCalculate(50, 20) 

//console.log(victoryBalance) - usei para testar anteriormente

let level
    if (victoryBalance <= 10) {
        level = "Ferro"
    }
    else if (victoryBalance >= 11 && victoryBalance <= 20) {
        level = "Bronze"
    }
    else if (victoryBalance >= 21 && victoryBalance <= 50) {
        level = "Prata"
    }
    else if (victoryBalance >= 51 && victoryBalance <= 80) {
        level = "Ouro"
    }
    else if (victoryBalance >= 81 && victoryBalance <= 90) {
        level = "Diamante"
    }
    else if (victoryBalance >= 91 && victoryBalance <= 100) {
        level = "Lendário"
    }
    else if (victoryBalance >= 101) {
        level = "Imortal"
    }
//console.log(level) - Usei para testar anteriormente

console.log(`O Herói tem de saldo de ${victoryBalance} está no nível de ${level}`)


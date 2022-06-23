function numbersList(num) {
  const numbersArray = [];

  for(i = 1; i <= num; i++) {
    const multiplesOfThreeAndFive = i % 3 === 0 && i % 5 === 0;
    const multiplesOfThree = i % 3 === 0;
    const multiplesOfFive = i % 5 === 0;

    if(multiplesOfThreeAndFive) {
      numbersArray.push("Universo")
    } else if (multiplesOfThree) {
      numbersArray.push("Uni")
    } else if (multiplesOfFive) {
      numbersArray.push("Verso")
    } else {
      numbersArray.push(i)
    }
  }
  console.log(numbersArray.join('\r\n'))
}
numbersList(100)


// Função recebe como parâmetro o numero máximo (no caso da questão, 100)
// No laço de repetição, caso o número seja múltiplo de 3 e 5, é salvo "Universe" substituindo o número.
// Caso o número seja múltiplo de 3, é salvo "Uni" substituindo o número.
// Caso o número seja múltiplo de 5, é salvo "Verse" substituindo o número.
// Ao final, o array completo de 1 a 100 é exibido linha a linha, com todas as substituições executadas.

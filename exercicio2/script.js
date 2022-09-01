const arrayNumber = [12, 5, 99,]
const arrayString = ["s", "f", "c"]
const arrayMist = ["a", 7, true, 20, false, "g"]
 
//Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão
console.log (arrayNumber.length)
console.log (arrayString.length)
console.log (arrayMist.length)

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
console.log (arrayNumber[0], arrayString[1], arrayMist[2])

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do 
//primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item 
//ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log (arrayNumber.includes(12), arrayMist.includes("x"))
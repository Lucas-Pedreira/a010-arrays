//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia
const arrayNumber = [12, 5, 99,]
const arrayNumberCopia = arrayNumber.slice()
arrayNumberCopia.push(1912)
console.log (`original: ${arrayNumber} cópia: ${arrayNumberCopia}`)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia
const arrayString = ["s", "f", "c"]
const arrayStringCopia = arrayString.slice()
arrayStringCopia.pop()
console.log (`original: ${arrayString} cópia: ${arrayStringCopia}`)

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia
const arrayMist = ["a", 7, true, 20, false, "g"]
const arrayMistCopia = arrayMist.slice()
arrayMistCopia.splice(1,1)
console.log (`original: ${arrayMist} cópia: ${arrayMistCopia}`)
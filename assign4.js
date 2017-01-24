//console.log(`${process.argv[0]} \n ${process.argv[1]}` )
const mealCost = Number(process.argv[2])
const tipPercent = Number(process.argv[3])
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost
const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`
console.log(outPut)
const score=100
const balance=new Number(300)

console.log(score)
console.log(balance)

console.log(balance.toString())
console.log(typeof balance)
// now we can apply all the string's method to the balance

console.log(balance.toString().length)
// it fixed the numbers after decimal
console.log(balance.toFixed(3))

const decimal1=23.8966
const decimal2=123.8966
console.log(decimal1.toPrecision(3))
console.log(decimal2.toPrecision(3))


//interesting
const price=1000000
console.log(price.toLocaleString('en-IN'))


//*********************************************** MATHS ************************************************************************* */
console.log(Math)
console.log(Math.abs(-90))
console.log(Math.round(78.67))
console.log(Math.ceil(78.67))
console.log(Math.floor(78.67))
console.log(Math.min(23,42,542,54))

//suppose creating a dice game
console.log(Math.random())
// multiplying by 10 in order to change the range
//adding one to eliminate 0
console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10)+1))


//fornula to generate number within the range only
const min=10
const max=20
console.log(Math.floor(Math.random()*(max- min+1)) +min)


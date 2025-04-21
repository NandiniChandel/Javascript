let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


console.log("Different ways to declare date:")
// in this month starts from 0
let myCreatedDate=new Date(2025,3,21)
console.log(myCreatedDate.toDateString())

let myDateTime=new Date(2025,3,21,8,15)
console.log(myDateTime.toLocaleString())

//in this month start from 1
//yyyy-mm-dd
let birthDate=new Date("2006-07-10")
console.log(birthDate.toDateString())

//mm-dd-yyyy
let wishDate=new Date("10-05-2004")
console.log(wishDate.toLocaleDateString())


//********************************************** TIMESTAMP**************************************************************** */
let myTime=Date.now()
console.log(myTime)
console.log(wishDate.getTime())


//converting date to second
console.log("All the dates are in milliSeconds while this following date is in second")
console.log(Math.floor(Date.now()/1000))


let newYear=new Date()
console.log(newYear.getDate())
console.log(newYear.getMonth()+1)
console.log(newYear.getDay())

newYear.toLocaleString('default',{
    weekday:"long"
})

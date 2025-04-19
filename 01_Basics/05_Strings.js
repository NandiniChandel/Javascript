const name="Nandini"
const repoCount=6

// back_ticks help in embedding the variables with the string--->INTERPOLATION
console.log(`My name is ${name} and My repositry count is ${repoCount}`)

//different way to declare string which creates a string as string datatype ,it provides several prototype methods
const college=new String('KIET')
console.log(college)
console.log(college[0])
//we can check the prototypes using:
console.log(college.__proto__)


//some functions of string
//1.Length
console.log(college.length)
//2.To UpperCase
console.log(college.toUpperCase())
//3.Bold
console.log(college.bold())
//4.CharaAt
console.log(college.charAt(2))
//5.IndexAt
console.log(college.indexOf('E'))
//6.substring
const userName=new String(' Hitesh_maan ')
console.log(userName.substring(0,5))
//7.slicing
console.log(userName.slice(3,7))
//8.trimming
console.log(userName.trim())
//9.Replace
let url="https://google.com/nandi%20/78811-"
console.log(url.replace('%20',"_"))
//10.includes
console.log(url.includes("nand"))
//11.split
console.log(url.split('/'))
//12.Blink
console.log(url.blink(2))


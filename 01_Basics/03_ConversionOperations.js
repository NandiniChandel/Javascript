let score=33
console.log(typeof (score));

let score2="33abc"
console.log(typeof (score2))

let valInNum=Number(score2)
console.log(typeof (valInNum))
console.log(valInNum)


//"33"=>33
//"33abc"=>NaN
//undefined=>NaN
//null=>0
//true=>1 ; false=>0

let loggedIn=1
let boolLoggedIn=Boolean(loggedIn)

console.log(boolLoggedIn)

//anything other than 1 and empty string return true
// 1=> true;
//0=>false; ""=>false


//******************************** OPERATIONS ******************************//
let value=3;
let negValue=-value;
console.log(negValue)

let name="Nandini";
let surname=" Chandel"
let fullname=name+surname
console.log(fullname);


//Tricky Conversion
console.log("1"+2)
console.log(2+"1")
console.log("2"+1+2)
console.log(1+2+"3")


let gameCounter=34;
console.log(gameCounter++);
console.log(++gameCounter);


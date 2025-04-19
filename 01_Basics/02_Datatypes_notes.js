/* On the basis of how the the variable is stored in memory and how to access them:

JAVASCRIPT is Dynamically typed Language:

The dadatypes in javascript are broadly classifies as:

   i) Primitive datatype        ii) Non-Primitive Datatype(Reference)
      1.String                       1.Array
      2.Number                       2.Objects
      3.Boolean                      3.Functions       
      4.null(empty)
      5.undefined
      6.Symbol
      7.BigInt
*/

//Symbol Datatype:
const Id=Symbol('123');
const anotherId=Symbol('123')
console.log(Id===anotherId)

//BigInt
const BigNumber=72668160n
console.log(typeof BigNumber)

//Array
const heroes=['Shaktiman','doga','nagraj']
console.log(typeof heroes)


//object
let myObj={
   name:"Nandini",
   age:20,
}
console.log(myObj)

//function
const myFun=function(){
   console.log("Hey!! This is my first Function")
}
console.log(myFun)



//++++++++++++++++++++++++++++++++++++++++++++ MEMORY  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/*    i)Stack(Primitive)                                 ii)Heap(Non-Primitive)
         -->The changes are made in the copy of the         -->here,we get the references all the changes
            variable,the original value remains                are made in the original value.
            unaffected 
*/

//Primitive Datatype

let myname="Nandini"
let name=myname
name="Nandu"
console.log(myname)
console.log(name)

//Non-Primitive Datatype

let userOne={
   fullname:"Nandini_Chandel",
   email:"nandinichandel107@gmail.com",
   rollnum:125

}

let userTwo=userOne
userTwo.fullname="Shayama"
console.log(userOne.fullname)



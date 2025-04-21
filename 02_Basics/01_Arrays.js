//Array: Array creates the shallow copy(copy and original share same reference unlike deep copy)

//Shallow Copy->have the same reference point
//Deep copy-->these do not share same reference point
const myArr=["appetite",'retina',34,23,78]
console.log(typeof myArr)

const superHeroes=new Array('Shaktiman','spiderman','sonpari')
console.log(myArr[0])
console.log(superHeroes[1])

//Array methods

//1.Push
myArr.push('Pushed_Element')
console.log(myArr)

//2.Pop
myArr.pop()
console.log(myArr)

//3.Unshift(Insert element at 0th index by shifting all the elements)
myArr.unshift("Unshifted_element")
console.log(myArr)

//4.shift
myArr.shift()
console.log(myArr)

console.log(myArr.includes("appetite"))
console.log(myArr.indexOf(1))

const arr1=[1,2,3,4,5,6]

//join function bind the array and also convert it into the string
const arr2=arr1.join()
console.log(arr1)
console.log(arr2)


//slice and splice
console.log("Slicing and Splicing")
const n1=[0,1,2,3,4,5,6,7]

// slice do not change the original array but comes up with the elements in given range

const n2=n1.slice(0,4)
console.log("A: ",n1)
console.log("B: ",n2)

//splice modify the original array it comes up with the range of the elements but removing them from the original array

const n3=n1.splice(0,4)
console.log("A: ",n1)
console.log("c: ",n3)






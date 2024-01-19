var request = new XMLHttpRequest()


request.open('get','https://restcountries.com/v2/all')
// request.open('get','https://andruxnet-random-famous-quotes.p.rapidapi.com/')

// console.log(a1)
// request.send()
// 
request.onload= function()
{
    var result = JSON.parse(request.response)
    // console.log(result)
    for (var i=0; i<result.length;i++)
    {
        console.log(result[i].name)
        // console.log(result[i])
    }
    // var res = result.filter((ele)=>ele.population<300000)
    // var pop = res.map((ele)=>ele.name)
    // console.log(res)
    // console.log(pop);
    // var res=result.filter((ele)=>ele.region=="Europe")
    // var cname = res.map((ele)=>`${ele.name},${ele.region}`)
    // console.log(res);
    // console.log(cname);

    // let mapcountry = result.map((ele)=>ele.population)
    // console.log(mapcountry);
    // let res = mapcountry.reduce((acc,cc)=>acc+cc)
    // console.log(res);
    // // for each assingment
//     let mapc=result.map((ele)=>ele)
//     let res = mapc.forEach((ele)=>console.log(ele.name,ele.flag,ele.capital));
    // let curnecy = result.filter((ele)=>ele==='Dolor')
}


// var obj1={name:'logan',age:23}
// var obj2={age:23,name:'logan'}

// console.log(obj1.name==obj2.name)

// let a=-4
// let b = 7

// for (i=a;i<=b;i++){
//     console.log(i);
// }

// find the most frequent one:
// let arr=[3,'q','q','q',2,4,'q', 3,'q',2,5,4]

//  Anonymous Finction
// storing the function is call Ananymous funstion
// syntax: let var_name =function(){}
// Arrow Function
// Arrow function is used to reduce the line of the code length
// syntax: var var_name =()=>{}
//  there are two way to use:
// 1. if the code have singl statement, then  there is no  need of return statement 
// eg:
// var res =()=>'hello world'
// console.log(res());
// // or
// var res1 =(a,b)=>a*b
// console.log(res1(2,5));

// if the line of code is more then one means, return is must:
// var res1=(a,b)=>{
//     console.log('hello world');
//     return a*b
// }
// console.log(res1(3,4));
// spread opereator
// it used to expand the (collection data) array
// syntax: ...
// eg:
// let arr =['one','two','there','four']
// console.log(...arr);
// it used to convert a string into char array
// let a='hello'
// let cht =[...a] // it return the string in the  char array
// console.log(cht);   

//calss in js

// class Cardetail{ // creating  a class
//     constructor(brand,color){   // constructor 
//         this.brand=brand  // this is a keyword 
//         this.color=color
//     }
// }
// let obj = new Cardetail('bmw','green') // constructor call
// console.log(obj.brand,obj.color);

//Method
// method is funtion which is inside the class
// with the help of method we can acccess the value outside the clss
// syntax: obj.funName()

// class Cardetail{
//     constructor(brand,color){
//         this.brand=brand
//         this.color=color
//     }
//     paintcolor(){ // method inside the  class
//         return this.color
//     }
// }

// var color = new Cardetail('haiv','geend')
// console.log(color.paintcolor()); // accessing the  vaulue outside the class

//map method:
// map method accept function as parameter
// it apply on each element in the array
// retrun the new array
// inside the fuction we need to use parameter
// value here is a parameter to get the elemetn from  the  array 
//syntax: array.map(fnction_name)
//eg:
// let arr= [3,7,2,8]
// ler res =arr.map((value)=>ele*2) // here we using the arrow fuction  to reduce line of code

//Filter method
// filter  method  based on the condition 
// if the condition is satisfied it accept the value if not it reject the value
// it apply on each element in the array
// retrun the new array
//syntax: arrname.filter(fun_name)

// let arr= [3,7,2,8]
// ler res =arr.filter((value)=>ele%2===0) // here we using the arrow fuction  to reduce line of code

//Reduce Function
// Reduce fuction will reduce the array into the single value
// used like sum of the value etc...
// syntax: let res = arrname.reduce((acc,cc)=>acc+cc,[initial_value]) 
//  acc and cc is userdeficned
// var arr1 =[43,25,44,243,23]
// let res =arr1.reduce((arg1,arg2)=>arg1+arg2)
// console.log(res);

// without giving the initial value it take the first element in the array
// var arr =[43,25,44,243,23]
// let res1 =arr.reduce((arg1,arg2)=>arg1+arg2,0)
// console.log(res1);

//Destructure
//it is used to unpack the array

// let arr = [1,5]
// let [one,two]=arr

// in Object
// let arr2={
//     one:'1',
//     two:'2',
//     three:'3'
// }
//syntax
// let {sourcekey:value} = objname

// let {one:first,two:second,three:third}=arr2;
// console.log(first)

// for each (it is uni direction)
// it is only apply on array
// it take function as parameter 
// it simply used for printing purpose
// it retrun  undefined 

// let arr = [1,23,4,6,23]
// let rest= arr.forEach((ele)=>console.log(ele));
// console.log(rest); // it return undefined
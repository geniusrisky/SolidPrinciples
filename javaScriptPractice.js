//let array = [2,3,4]
//console.log([...array])

// function fruit(){
//     name = "Banana"
//     console.log(name);
//     console.log(price);

//     var name = "apple";
//     let price = 20;
// }
// fruit()


// for(var i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i)

//     }, 2000)
// }


// console.warn(+null)
// console.warn(typeof +false)

// console.log(2+ +"A".charCodeAt(0));


// console.warn(!"anil")
// console.log(typeof(!"ail"))


// let data = "size";
// const bird = {
//     size: " small",
//     height: 3

// }
// console.warn(bird[data]);
// console.warn(bird.data);
// console.warn(bird["size"]);
// console.warn(bird.size);

// let c = { name: "peter"};
// let d;
// d=c;
// c.name = "anil";
// console.log(d.name);

//  var x;
//  var x=10;
//  console.log(x)


// let a = 3;
// let b  = new Number(3);
// console.log(a == b);
// console.log(typeof a, typeof b)
// console.log(a===b)

// let name ;
// nmae = {};
// console.log(nmae)



//========> 

// function fruit(){
//     console.log('woof');
// }
// fruit.name = 'apple'; 
//name is the property of object which is initialized in the runtime and  cant be mmodified manually
// console.log(fruit.name)
// console.warn(fruit());

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(2, +"3"))

// let number = 0;
// console.log(++number);
// console.log(number++);
// console.log(number)

// function getAge(...args){
    
//     console.log(typeof args);
// }
// getAge(21)

// function getAge(){
//     "use strict";  
//         age =21
//     console.log(age);
// }
// getAge()
// "use strict"
// x= 3.14;
// let x =x+2
// console.log(x+2, z)

// const sum = eval(10*10+5)
// console.log(sum);

// sessionStorage.setItem('cool_secret', 123);

// const obj = {1:'a', 2:'2', 3:'3', 4:'4', 5:'5'};
// console.log(obj.hasOwnProperty(1));
// console.log(obj.hasOwnProperty("1"));
// console.log(obj);

// for(let i=0; i<5; i++){
//     if(i===3) continue;
//     console.log(i);
// }


// function sayHi(){
//     return (()=> {return 0})();
// }
// console.log(sayHi())
// console.log(typeof sayHi());


// function sayHi(){
//     return ()=> 0;
// }
// console.log(sayHi())
// console.log(typeof sayHi());

// console.log(typeof typeof 1)


// let number = [1,24,4];
// number[9] = 11;
// console.log(number)


// let num  = [1,3,45];
// num[3] =num;
// console.log(num)


// console.log(!!null)
// console.log(!!"")
// console.log(!!1)


// console.log( setInterval(()=> console.log('hi'), 1000))
// console.log( setInterval(()=> console.log('hey'), 1000))
// console.log( setInterval(()=> console.log('hello'), 1000))

// console.log([..."anil"])

// console.log([]==[])

// let data = [1,2,3].map((data)=>{
//     // if(typeof data == 'number') return;
//     return data*2;
// })
// console.log(data)


// function getInfo(member){
//     member.name  = 'Anil'
// }
// let person = {name: 'John'}
// getInfo(person);
// console.log(person.name)


// function car(){
//     this.make = 'tata';
    
// }

// let newCar = new car();
// console.log(new car().make)

// (()=>{
//     // 'use strict'
//     let x = y = 10
// })();

// (()=>{
//     // 'use strict'
//     let x = y = 20
// })();
// //console.log(typeof y)

// console.log(y, typeof x)

//console.log(true - !true)
//console.log(true + +'10')


// let a = [];
// let b = a
// console.log(a===b)


// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0])


// let z = [1,2 ,3, 4];
// let a = {name: "anil"};
// console.log(...z)

// console.log(typeof NaN === 'number');
// console.log(10 - -10);

// let set = new Set([1,2,3,3,4,2]);
// console.log(set)

// let person = {name: 'John', age: 20};
// console.log(delete person.name);
// console.log(person)

// let data = [1,2 , 3,4 ];
// const [y, z, a] = data;
// console.log(y, z, a)


// let name ="akash";
// console.log(name())


// let a = false  || null || {};
//  console.log(a);
// console.log({}==true)

// if({}){
//     console.log('true')
// }

// let a =   false || 0 || [];
// console.log(a);

// let x = Promise.resolve(5).then((val)=> {return val});
// console.log(x)

// const name = 'sidhu';
// function getname(){
// console.log(name);
// var name = 'hello';
// }
// getname();


// console.log(`${(x => x)('i love')}to program`)
// console.log((x=>x))

// function calSum(x,y,z){
//     return x+y+z;
// }
// console.log(calSum(1,2,3))
// console.log(calSum(...[1,2,3]))
// console.log([...'1',2,3])
// console.log(calSum([1,2,3]))


// let s = 'amdsd asmdsa askld';
// console.log(typeof s)
// console.log(!typeof s === 'object');
// console.log(!typeof s === 'string');

// let s = 'subscribe';
// let age = 23;
// console.log(isNaN(s));
// console.log(isNaN(age));


// let person = { name: 'Akash'};
// Object.seal(person);
// person.name = 'Anil';
// console.log(person);


// let ar = [1,2,3,4];
// ar.unshift(2);
// console.log(ar);

// let data = "false";
// let x = Boolean(data);
// console.log(x)
// let result = []
// let fore = [1,2,3,4];
// fore.forEach((a)=> {
//    result.push(  a*2)
// });
// console.log(result);


// let s= 2;
// setTimeout(()=>{
//     console.log(s)
// },0)
// s=100;


// let a = 2;
// let A =1;
// console.log(A)


// let a = "like";
// let A =`like`;
// console.log(a===A);

// let c =2;
// let a=1;
// let b =1
// console.log(--c == a ==b)
// console.log(navigator)

// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name = 'apple';
//     let price = 20
// }

// fruit()

// for(let i=0; i<3; i++){
//     setTimeout(()=> console.log(i), 1)
// }

// console.log(!"anil");
// console.log(typeof("anil"));

// function me(){let data = "size";
// let bird = {
//     size: "small"
// };
// console.log(bird[data])}

// console.log(me.name)


let person = {
    name : 'John',
    age: 34,
    profession: 'public',
    address: {street: '124 JC',
                area: 'boston clony'
    }
}
for(let keys in person) {
    console.log(keys, person[keys])
}
console.log(Object.entries(person))
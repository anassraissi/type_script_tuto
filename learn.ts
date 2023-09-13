  let variable:String;

variable=3; //false
variable="Raissi Anass" // true;
// as same as other type of variable

// except  union type  

let var1 : string | number;
  var1 = "Raissi anass"  // it take all of two type
  var1 =34;

                                        //array;
  let array1=["anass","raissi"];
//   array1.push(3)// false 
array1.push('Raissi') //true;

//except union type 
let array2:(string|number) [];
  array2=["anass",3,"raissi"] //true;

                                     //object
  let obj={
    name:'Raisi Anass',
    age:30,
    hobies:["sport","racing","swimming"]
  }

  obj.name="Raissi Anass" ; //true
//   obj.age="thety";  // false cause it number

let objuser:{
    name:String,
    age:Number,
    hobies:[]
}
objuser={
    name:"Raissi Anass",
    age:34,
}  //err missing item hobies and it not allwed to add an item but condition.

// if we add ? sign with declaration item => means it's not required.
let objuser2:{
    name:String,
    age:Number,
     hobies ?:[]
}
objuser2={   //true 
    name:"Raissi Anass",
    age:34,
} 
 
                                            //any

let testany;  // or test:any
testany="Raissi";
testany=32;
testany=["raissi",33] 
// it's true cause any mean allowed any type.

let array3: any[];
array3=[ "raissi",56]; //it's true.

                                            //FUNCTION

const syhi=()=>{
    console.log("hi anass");
}
// syhi="hi anass";   // it's error cause it allwed to be function

let functionReturnString= ():string=>{    // it mean be rettun a string.
    console.log("Raissi anass");  //false
    return "raissi Anass";  //true
}
//mltiple
let multiple=(num:number)=>{       
        return num+3;  //true
}    
  //it's the same as below
let multiple1=(num:number):number=>{
    return num+3;  //true
}
//but

let multiple1=(num:number):void=>{
    return num+3;  //false it should not retuning any thing.
}
                                        // type aliases

type userType={
    username:String,
    age:Number,
    phone ?: String
}
let betterfunction=(user:userType)=>{    /// true;
    user.username="Raissi";
    console.log(user.username)
}

type myfunct=(a:Number,b:String)=> void  // multiple function
    //exemple
let write: myfunct=(num,str)=>{
    console.log(num+ ''+ str);
}

type userType2={
    username:string,
    age:number,
    phone ? :number,
    theme:'light' | 'dark'
}

let userTheme : userType2={
    username:'Raissi Anass',
    age:40,
    theme:''    //error  must be light or dark
}

                                                        // Intergaces
                                                    
interface Iuser{
    username:string,
    email:string,
    age:number
}
interface Iepmloyee extends Iuser{
    employeeId:number
}

const emp:Iepmloyee={
    username:'Raissi Anass',
    email:'Raissi@anass.com',
    age:24,
}
//  must add employeeId:56789     //// error property missing in interface iemploye

const client:Iuser={
    username:"Raissi",
    email:"<EMAIL>",
    age:21   // it true cause we use just Iuser interface
}
                                                                //Generics

interface ICategory{
    id:number,
    username:string
}
interface IAuth{
    id:number,
    username:string
}
interface IPost{
    id:number,
    title:string,
    desc:string
    extra:IPost[] | ICategory
}





















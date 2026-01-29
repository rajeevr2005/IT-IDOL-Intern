//-----------Part A: Practice Task--------------

//1. Variables & Data Types

let StudentName="Rajeev Ranjan";

const birthYear=2005;

let learningStatus=true;

let FavouriteProgrammingLanguage="Java";

let profileDetail={
    profileName:"Rajeev",
    phoneNo:7909017420,
    intern:true,
    sem:8
}


console.log(
    "Name is "+ StudentName +  " and type is " + typeof(StudentName) + "\n" + 
     "Birth Year is " + birthYear + " and type is " + typeof(birthYear) + "\n" +   
     "Learning Status is " + learningStatus + " and type is " + typeof(learningStatus) + "\n" + 
     "Favourite ProgrammingLanguage is " + FavouriteProgrammingLanguage + "  and type is "+ typeof(FavouriteProgrammingLanguage) 
)

for (let key in profileDetail) {
  console.log(key + ":", profileDetail[key], "| type:", typeof profileDetail[key]);
}


//Array and object operation

let products=[
    {
        id:1,
        name:"Laptop",
        price:50000,
        stocks:100
    },
    {
        id:2,
        name:"Phone",
        price:10000,
        stocks:10
    },
    {
        id:3,
        name:"Smart Watch",
        price:2000,
        stocks:15
    },
    {
        id:4,
        name:"Head Phones",
        price:1500,
        stocks:70
    },
    {
        id:5,
        name:"Tab",
        price:10000,
        stocks:0
    }
]


//Add newProducts

products.push({
    id:6,
    name:"keyboard",
    price:1200,
    stocks:50
});

console.log("After adding new product:", products);

//Remove product id=3
products = products.filter(product => product.id !== 3);
console.log("After removing product with id 3:", products);


//update price of phone

for (let product of products) {
    if (product.id === 2) {
        product.price = 12000; // new price
    }
}
console.log("After updating price of product with id 2:", products);

//print the product name

products.forEach(product => console.log(product.name));

//display the product that are available

let inStockProducts = products.filter(product => product.stocks > 0);
console.log("Products in stock:", inStockProducts);


//3. Conditional Logic

let number=10;
if(number>0){
    console.log(number + " is Positive Number");
}
else if(number<0){
    console.log(number + " is Negative Number");
}else{
    console.log(number + " is zero");
}


//Loops

//Print Number from 1 to 20

for(let i=1;i<=20;i++){
    console.log(i);
}

//Print all even Number

for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i + " is even number");
    }else{
        console.log(i + " is odd number");
    }
}

//Print numbers from 10 to 1 in reverse order

for(let i=10;i>0;i--){
    console.log(i)
}


//5.Function

//convert temp from celsius to Fahrenheit

function temConversion(celsius){
    return (celsius * 9/5) + 32; 
}

console.log("30°C is equal to "+ temConversion(30) + "°F");

//check whether the number is even or odd

function oddEven(num){
    if(num%2==0){
        return "Even number";
    }else{
        return "Odd Number";
    }
}

console.log(oddEven(5));

//Find and return the largest number among two number

function largestNum(num1,num2){
    if(num1>num2){
        return num1 +" is largest";
    }else{
        return num2 +" is largest";
    }
}

console.log(largestNum(1,5));


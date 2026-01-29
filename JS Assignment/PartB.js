//-------------Part B---------------


//1. Count Vowel in a string

function countVowel(vowel) {
    let count = 0;

    let vowelUpperCase = vowel.toUpperCase()
    for (let ch of vowelUpperCase) {
        if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
            count++;
        }
    }

    console.log("Number of vowels in " + vowel + " is " + count);
}

countVowel("Rajeev");

//2. Reverse an Array

let arr = [2, 5, 3, 8, 9, 1];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//3.Second Largest Number

//-----first way---------
let findSecondLargeNo = [29, 45, 2, 23, 5, 32];

function comp(a, b) {
    return b - a;
}

console.log(findSecondLargeNo.sort(comp));
console.log("Second Largest Number is:", findSecondLargeNo[1]);

//-------second way----------

let Number = [34, 23, 88, 96, 55, 46, 33];

for (let i = 0; i < Number.length; i++) {
    for (let j = i + 1; j < Number.length; j++) {
        if (Number[i] < Number[j]) {                                    
            let temp = Number[i];
            Number[i] = Number[j];
            Number[j] = temp;
        }
    }
}

console.log("Second Largest Number is:", Number[1]);


// 4. Remove Duplicate Elements

let arrElement = [12, 20, 15, 14, 13, 16];

let newArr = [];

for (let i = 0; i < arrElement.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < newArr.length; j++) {
        if (arrElement[i] === arrElement[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        newArr.push(arrElement[i]);
    }
}

console.log("New Array after Removing Duplicate is " + newArr)


//5.Palindrome Check

function checkPalindrome(string) {
    let reversed = "";
    for (let i = checkPalindrome.length - 1; i >= 0; i--) {
        reversed += checkPalindrome[i];
    }

    if (string.toLowerCase() === string.toLowerCase()) {
        return string +" is Palindrome"
    } else {
        return string +" is not Palindrome"
    }
}

console.log(checkPalindrome("madam"))



//6. Function to find the longest substring without repeating characters

function longestSubString(str) {
    let longest = ""; 

    for (let i = 0; i < str.length; i++) {
        let current = ""; 

        for (let j = i; j < str.length; j++) {
            if (current.includes(str[j])) {
                break; 
            }
            current += str[j];
        }

        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest; 
}

console.log(longestSubString("abcabcbb")); 
console.log(longestSubString("bbbbb"));    
console.log(longestSubString("pwwkew"));   
console.log(longestSubString("abcaefgh")); 



//7.Merge two sorted array without using sort() method

let arr1=[2,5,7,13,19,26];
let arr2=[19,20,23,35,43,54,88];

let newarray=[];

for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}


for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            let temp=arr1[j];
            arr1[j]=arr1[i];
            arr1[i]=temp;
        }
    }
}
newarray=arr1;
console.log(newarray);



//8. Longest Common Prefix

let longPrefix = ["interview", "international", "internet"];


let prefix = longPrefix[0];

for (let i = 1; i < longPrefix.length; i++) {
   
    while (longPrefix[i].indexOf(prefix) !== 0) {
       
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix === "") break; 
    }
}

console.log("Longest Common Prefix:", prefix);





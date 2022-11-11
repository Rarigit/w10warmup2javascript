//Imports
//Classes
//Constants
//Functions




function printString(message){//script scope
    console.log(message);//Example of a function that takes something give nothing back as there is no return statement
}

function getMood(isHappy) {//isHappy represents the convention for naming boolleans
    if (isHappy){
        console.log("Happy");
    } else {console.log("sad");
}
}

function max(num1, num2){//Category 4 function take something and return something
    if (num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2;
    } else {
        return null;
    }
}

function findMax(arr){
    // Look at first box
    // Write down the number as the currently largest
    let maximum = arr[0];
    for (let i=1; i<arr.length; i++){
    // Go to the next box
    // Look at the content of the box
    // Compare the value to what I have written down
    // If the new number is larger than the one written down, overwrite the largest number
    if (arr[i] > maximum){
        maximum = arr[i];
    }//An if can exist without an else but not vice versa
    // Otherwise, move on
    // Repeat line 33 a.k.a Go to the next box
    }
    // After finishing looking at all boxes, return the number cyrrently written down
    return maximum;
}

function findHappiness(arr){
    // Ititerate through the array
    // For each element, check if string contains "happy"
    // if it does, return the string
    // Otherwise, pop the string
    let curStr;
    while (arr.length >0){ //Equivalent to i++
        curStr = arr.pop(); // Each popping of the loop shortens the array by one
        if (curStr.includes("happy")) {
            return curStr;
        }
    }
    // If loop finishes, there wa sno string therfore return null
}


//Actually executable script

printString("Hello world");//This is just a function test
let message = "Hello again";//global scope
printString(message);

//should print "happy"
getMood(true);//function test
// should print "sad"
getMood(false);//function test

let result = max(2,5);
console.log(`The larger number was ${result}`);
console.log(`The larger number was ${max(2,5)}`);

result = max(10,4);
console.log(max(4,4));
console.log(max(-3,-20));
console.log(max(100.25487, -45.21897));

let myArr = [1,2,3,4,5];
console.log(findMax(myArr));
myArr = [0,0,0,0,0];
console.log(findMax(myArr));
myArr = [-5,4,100,1000,-54123,0];
console.log(findMax(myArr));
console.log(findMax([2,5,7,10])); //Anonymous as it has no variable attached

console.log(findHappiness(["hello", "my", "mane", "is", "happy"]));
console.log(findHappiness(["happyness", "my", "",'is']));
console.log(findHappiness(["sir", "nope", "rekt"]));
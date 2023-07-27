//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(e){
    let reversedString = "";
    for( let i = e.length - 1; i >= 0; i--){
        reversedString += e.charAt(i);
    }
    return reversedString
}
let outputStr = reverseString("Bangladesh");
console.log(outputStr);



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sum(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        if(num[i] > 0){
            sum += num[i];
        }
    }
    return sum;
}

let add = sum([8, -3, 20, -5, 9]);
console.log(add);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function frequent(e){
    let count = {};
    let mostFrequent;
    let maxCount = 0;

    for( let i = 0; i < e.length; i++ ){
        const element = e[i];
        count = (count[element] || 0) + 1;

        if(count > maxCount){
            maxCount = count[element]
            mostFrequent = element
        }
    }
    return mostFrequent;
}
let arr = frequent([7, 5, 3, 4, 7, 4, 7, 7, 5]);
console.log(arr);


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return []; // If no such pair is found
  }
  
  // Test the function
  let inputArray = [1, 3, 6, 8, 11, 15];
  let targetValue = 9;
  let indices = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(indices); // Output: [1, 2]
  



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

  function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error: Division by zero is not allowed.";
        }
      default:
        return "Error: Invalid operator.";
    }
  }
  
  // Test the calculator function
  let number1 = 5;
  let number2 = 3;
  let operator = '+';
  let result = calculate(number1, number2, operator);
  console.log(result); // Output: 8
  
  operator = '-';
  result = calculate(number1, number2, operator);
  console.log(result); // Output: 2
  
  operator = '*';
  result = calculate(number1, number2, operator);
  console.log(result); // Output: 15
  
  operator = '/';
  result = calculate(number1, number2, operator);
  console.log(result); // Output: 1.6666666666666667
  
  number2 = 0;
  operator = '/';
  result = calculate(number1, number2, operator);
  console.log(result); // Output: "Error: Division by zero is not allowed."
  
  operator = '%'; // Invalid operator
  result = calculate(number1, number2, operator);
  console.log(result); // Output: "Error: Invalid operator."
  





// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
    }

    return password;
}

// Example usage: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);



// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
const romanToIntegerMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

let integer = 0;
let prevValue = 0;

for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentRoman = romanNumeral[i];
    const currentValue = romanToIntegerMap[currentRoman];

    if (currentValue >= prevValue) {
    integer += currentValue;
    } else {
    integer -= currentValue;
    }

    prevValue = currentValue;
}

return integer;
}

// Test the function
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21
console.log(romanToInt("XL")); // Output: 40
console.log(romanToInt("MCMXCIV")); // Output: 1994


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element.";
    }
  
    return secondSmallest;
  }
  
  // Test the function
  let inputArr = [5, 2, 8, 1, 9, 3];
  let res = findSecondSmallest(inputArr);
  console.log(res); // Output: 2
  
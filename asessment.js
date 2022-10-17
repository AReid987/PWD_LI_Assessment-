/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
"git branch testbranch HEAD~5"

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

class APICaller extends React.Component{
  callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE 
    fetch('https://www.reddit.com/r/react.json')
    .then((result)=>{
      //#2 Return the result in json format
      result.json()
      //YOUR CODE HERE 
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      //YOUR CODE HERE 
      console.log(jsonData)
    })
  }
render(){
  return <div>
    <button 
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
  // YOUR CODE HERE 
  onClick={this.callApi}
    >Call the API now.</button>
  </div>
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APICaller />
  </React.StrictMode>
);


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.
Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */
"What is recursion?"
"Recursive functions => to start, google recursion. :)" 
"A recursive function is a function that calls itself."
"A recursive function consists of a base case and a recursive call."
"The recursive call is the bit that calls the function from within the function."

function myRecursiveFunction(number, power){
  //YOUR CODE WITH COMMENTS HERE
  // base case 
  // any number raised to the power of zero returns 1
  if (power == 0) {
    return 1
  }
  // recursive function call
  // multiply first argument by the return value of calling this function
  // with the same first argument 
  // and the second argument minus one
  // power - 1 as the second argument works like a decrementing counter
  console.log(power) 
  return number * myRecursiveFunction(number, power - 1)
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */
"An algorithm is just a set of steps that solve a problem. A sorting algorithm is used to rearrange an array based on a certain rule. This rule can also be called a comparison operator." 

"The purpose of sorting is to present data in a more readable way. The reason sorting is an important concept is that searching for data can be much more optimized if the data is stored in a sorted manner. A Bubble Sort algorithm is simpler than some other sorting techniques. It is not suitable for very large data sets however. In a Bubble Sort algorithm, elements next to one another are compared to one another and swapped to end up with the correct sequence."

/*Bubble sort example HERE*/

// define the function
function bubbleSort(array) {
  // loop over the length of the array
  for(let i = 0; i < array.length; i++) {
  
    // iterate over the array once for each outer iteration
    for(let j = 0; j < ( array.length - i -1); j++){

      // check if element at current iteration is greater
      // than element at next iteration
      if(array[j] > array[j + 1]) {
        // when the condition is true
        // swap the two elements
        let current = array[j]
        array[j] = array[j + 1]
        array[j + 1] = current
      }
    }
  }

  console.log(array)
}
/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
// dynamic programming 
// base case 
// in the absence of houses, profit zero
// if only one house, rob that house

// algo 
// 1. variable to store results of sub problems
// 2. set maxRobbed[n] to 0 with no houses to rob
//    set maxRobbed[n -1] to nums[n-1] since one house to rob
// 3. iterate from n + 2 up to nums.length and set 
//    maxRobbedAmount[i] = max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]) 

var rob = function(nums) {
  // base cases
  // if there are no houses max amount robbed is 0
  if (nums.length === 0) return 0
  // if there is one house max amount robbed is the value of that house
  if (nums.length === 1) return nums[0]
  
  // add first house to array and   
  // determine if the first house or second house is larger
  let maxRobbedAmount = [nums[0], Math.max(nums[0], nums[1])] 
  
  // add greater of compared values to array
  for (let i = 2; i < nums.length; i++) {
      // at 3rd index of max array add the greater of  
      // 2 houses back plus current house 
      // or the current max
      maxRobbedAmount[i] = Math.max(maxRobbedAmount[i - 2] + nums[i], maxRobbedAmount[i - 1]);
  }

  // return the last element which is the total 
  return maxRobbedAmount[nums.length - 1]
};

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubstring = function(s, k) {
  // starting variable to count number of times a letter occurs in the string
  let letterDictionary = {};
  
  // loop the length of the string
  for (i = 0; i < s.length; i++) {
      // if the letter already exists in the dictionary add 1 to it's count
      // if the letter doesnt yet exist start it's count at 1
      letterDictionary[s[i]] = letterDictionary[s[i]] ? letterDictionary[s[i]] + 1 : 1
  }
  
  // if every letter in the string is repeated enough times return the length of the entire string
  if (Object.values(letterDictionary).every((letter) => letter >= k)) return s.length
  
  // placeholder variables for results
  let currentLongestSubstring = 0
  let stringPointer = 0
  
  for (let i = 0; i < s.length; i++) {
  // when a letter doesn't appear k number of times
    if (letterDictionary[s[i]] < k) {
       // compare longest substring found so far with current substring
       currentLongestSubstring = Math.max(longestSubstring(s.substr(stringPointer, i - stringPointer), k), 
        currentLongestSubstring
      );
       // move to next letter in the string
       stringPointer = i + 1;
    }
  }
  // Check if current substring would have been longest if the recursive call happened
  currentLongestSubstring = Math.max(
      longestSubstring(s.substr(stringPointer), k),
      currentLongestSubstring
  );

  return currentLongestSubstring > 1 ? currentLongestSubstring : 0;
};

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/
https://github.com/AReid987/sql-challenge

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/
"In React state is the way we can cause the UI to change. Some of our components will rely on the same state in order to show something to the user. Ideally, we want to avoid duplicate state. If we can have state declared once per use case and then share it with all of the components that will make use of it, we can avoid a common source of bugs. Think about where your last name came from. If you go back far enough, you will likely have a common ancestor with other people that share your last name. This is similar to how react components share state. We want to lift state up to the nearest common ancestor to the components that rely on a certain piece of state."

"Passing state down to child components can quickly escalate to become a problem known as 'prop drilling'. This happens when there are deeply nested components or siblings down in the component hiearchy. Two tools that solve this problem are the Context API and redux."

"Context API is built into React. Redux is an open source library. Context requires less initial set up than Redux, however it is designed more for static data that doens't change often. It is also more difficult to debug deeply nested components with Context API. Each context must be created from scratch, so the Context API is less extensible. Redux requires much more of an initial set up, although it is easier to build upon once set up is complete. The Redux dev tools make debugging far more efficient. Redux also performs well with both static and dynamic data. Redux separates the concerns between stateful logic and UI logic whereas the Context API places both in the same component."

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/
"Node is basically open source JavaScript for building servers. You can think of node as JavaScript for the backend. Node can wait for events to happen, i.e. requests to the server and then execute some defined code once the event occurs. Think Rube Goldberg Machine. A big part of Node is the event loop. This part of the language waits for events to happen. Waiting for these events will keep a Node program running indefinitely. We can use Promise based programming to prevent our Node app from pausing to execute bits of code, thereby keeping our server fast and responsive. One reason for it's popularity is that Node has a large ecosystem of free to use, prewritten pacakages of code via npm (node package manager)."

"Express is simply a framework for Node. Express lets you structure an app to handle many different requests. It's like a set of conventions and built in functions that make it much easier to develop web apps and APIs. There is a large ecosystem of middleware available to handle almost any software problem. A nice thing about using Node / Express alongside a framework like React is that you can write JavaScript across your entire stack."



/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/
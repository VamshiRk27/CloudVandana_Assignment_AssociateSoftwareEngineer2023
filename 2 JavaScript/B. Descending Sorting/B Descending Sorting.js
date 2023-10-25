// Question: Perform sorting of an array in descending order.

// Components
const inputButton=document.getElementById("sort"); // Button for Input
const resetButton=document.getElementById("reset"); // Button for Reset
const inputString=document.getElementById("array"); // String for User Input initially empty
const question=document.querySelector("p.question"); // Input Array display
const answer=document.querySelector("p.ans"); // Reversed Array display
const array=[]; // array to store numbers
let count=0;

// Event Listeners
resetButton.addEventListener("click",()=>{
    // On click the window gets reset to initial state
    location.reload();
});

inputButton.addEventListener("click",()=>{
    const string=inputString.value; // Get the text value of input Array
    const n=document.getElementById("array-size"); // Get size of array
    const len=string.length; // store length of input string.  
    let start=0; // reference for start letter of a word in sentence
    // Loop to iterate over the input string initially end = 0 
    for(let end=0;end<len;end++){
        // if the character is a whitespace
        if(string.charAt(end)===" "){
            // we will push the substring of inputString i.e, number into array
            array.push(Number(string.substring(start,end)));
            end++; // end will be increased to next character after whitespace
            start=end; // start will changed to new end to track new word
        }
    }
    array.push(string.substring(start));
    renderArray(question,array); // Display Question Array
    sort(); // Function to perform sorting
    renderArray(answer,array); // Display Sorted Array Answer
    count=0; // Reset to initial count
    array.length=0; // Reset to empty array
});

function renderArray(element,array){
    // Function to render the array on window
    element.innerHTML=`[`;
    array.forEach((item) => {
        element.innerHTML+=`${item}`+" , "
    });
    const temp=element.innerHTML
    element.innerHTML=temp.substring(0,temp.length-3);
    element.innerHTML+=`]`;
}

function sort(){
    for (let i = 0; i < array.length; i++) { 
        // Last i elements are already in place   
        for (let j = 0; j < (array.length - i - 1); j++) { 
            // Checking if the item at present iteration is smaller than the next iteration 
            if (array[j] < array[j + 1]) { 
                // If the condition is true then swap the numbers 
                var temp = array[j];
                array[j] = array[j + 1]; 
                array[j + 1] = temp;
            } 
        } 
    }
    count++;
}

// Time & Space complexity analysis
/* 
    Time Complexity:
        let size of Input Array = N

    Total Time complexity will be O(M*M) as we need to traverse the whole array at each index.

    Space Complexity:
        let size of Input Array = n

    Total Space complexity will be O(n) as we need to store the array.
*/






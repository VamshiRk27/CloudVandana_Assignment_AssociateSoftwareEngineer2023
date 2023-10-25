// Question: Take a sentence as an input and reverse every word in that sentence.

// Components
const inputButton=document.getElementById("prompt"); // Button for Input
const resetButton=document.getElementById("reset"); // Button for Reset
const inputString=""; // String for User Input initially empty
const question=document.querySelector("p.question"); // Input String display
const answer=document.querySelector("p.ans"); // Reversed String display
const array=[]; // array to store words of input string

// Event Listeners
resetButton.addEventListener("click",()=>{
    // On click the window gets reset to initial state
    location.reload();
});

inputButton.addEventListener("click",()=>{
    // Prompt to get user input
    const inputString=prompt("Enter a sentence");
    question.innerHTML=inputString; // Input String display

    // Store each word of sentence as an array.
    inputString.trim(); // Trims whitespace at start/end of input string
    const n=inputString.length; // store length of input string.  
    let start=0; // reference for start letter of a word in sentence
    
    // Loop to iterate over the input string initially end = 0 
    for(let end=0;end<n;end++){
        // if the character is a whitespace
        if(inputString.charAt(end)===" "){
            // we will push the substring of inputString
            array.push(inputString.substring(start,end));
            end++; // end will be increased to next character after whitespace
            start=end; // start will changed to new end to track new word
        }
    }
    array.push(inputString.substring(start)); // at the end we store the last word

    let temp=""; // A string to store the reverse of input sentence.
    
    // Reverse the Sentence
    while(array.length>0){
        // the loop runs till the array is not empty
        const word=array.shift(); // retrieve and remove the first word of array
        
        // iterate the retrieved word from end to start ans store to temp
        for(let i=word.length-1;i>-1;i--){
            temp+=word.charAt(i);
        }
        temp+=" "; // adds whitespace at end of each word. 
    }
    // display the Reversed String.
    answer.innerHTML=temp.substring(0,temp.length);
});


// Time & Space complexity analysis
/* 
    Time Complexity:
        let size of Input String = N
        let size of Array = M

    Total Time complexity will be O(M+N) as we need to traverse the whole input string and the array.

    Space Complexity:
        let size of Input String = n
        let size of Array = m

    Total Space complexity will be O(m+n) as we need to store the string and array.
*/






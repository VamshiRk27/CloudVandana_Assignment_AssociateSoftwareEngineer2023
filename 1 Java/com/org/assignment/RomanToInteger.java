package com.org.assignment;
import java.util.*;

public class RomanToInteger {
	// Question ; Enter a Roman Number as input and convert it to an integer. (example IX = 9)
	
	/* The basic approach is to iterate the Roman number character by character and add the character value to a total value. 
	 *  Calculation: If the value of first appearing character is greater than second appearing character we will add the value else
	 *  						we will subtract the value.
	 *  				Example: IX --> 1 is less than 10 ==> total will be 10 - 1 = 9.
	 *  								 XI --> 10 is greater than 1 ==> total will be 10 + 1 = 11.
	 *  
	 *  To make the program more efficient, 
	 *  we will store a HashMap which stores each Roman notation as key and its numeric value as value for faster retrieval.
	 *  we will try to solve edge cases as much as possible 
	 *   
	 *  Edge Cases:
	 *  	1) The integer value of Roman number "XXXXIII" will be 43 but in reality 43 is XLIII.
	 *  			To solve the edge case 1 i have created a function to check whether the input is valid or not,
	 *  			if the input is valid the calculation will be performed else the program will return a error message without performing calculation.
	 *  			The pattern will look like : no character will continuously appear more than 3 times
	 *  	2) Our calculation approach may arise for error for input like XXXIVI.
	 *  			To solve the problem we can try having a variable storing previous calculated value and then perform calculation according to it.
	 */
	
	//	 This problem solves edge case 1 only and needs some modification to make work for edge case 2.
	
	public static void main(String[] args) {
		// A HashMap of type Character "Key" and Integer "Value" to store the mapping values of each Roman letter.
		HashMap<Character,Integer> hm=new HashMap<>();
		hm.put('I',1);
		hm.put('V',5);
		hm.put('X',10);
		hm.put('L',50);
		hm.put('C',100);
		hm.put('D',500);
		hm.put('M',1000);
		
		// Ask user for Roman number input
		System.out.print("Enter a Roman number:");
		try (Scanner scan = new Scanner(System.in)) {
			String roman=scan.next();
			
			int n=roman.length(); // Length of Roman Input String
			// If the length exceeds 3 then we must check if the input is valid or not
			// Example:- 4 can be written as IV but not as IIII, similarly 40 can be written as XL but not as XXXX
			if(roman.length()>3) {
				if(!checkValid(hm,roman,n)) {
					// If input not valid the program ends with a message
					System.out.println("Input is not a valid Number");
				}
				else {
					// If the input is valid the program will call a function to evaluate the integer value of Roman input.
					System.out.println(evaluate(hm,roman,n));
				}
			}
			else {
				// If the length doesn't exceed more than 3 then obviously the value can be evaluated.
				System.out.println(evaluate(hm,roman,n));
			}
		}
	}
	
	
	// Function to check the input Roman string valid or not
	public static boolean checkValid(HashMap<Character,Integer> hm,String str,int n) {
		// We will use sliding window to check whether the Roman string is valid or not
		// Since the length of same character doesn't exceed 3 if the window length becomes more than 3 the input is valid
		
		int start=0,end=0; // Initial pointers as start and end of window
		// while end is less than string length loop will run
		while(end<n) {
			// Edge case - 2:
			// If any character from the string doesn't exist in mapped values then the input isn't valid.
			if(hm.get(str.charAt(end))==null) {
				return false;
			}
			// If the character at end and start are same the window size increases
			if(str.charAt(end)==str.charAt(start)) {
				end++;
				// If the window overcomes the limit length the input isn't valid
				if(end-start>3) {
					return false;
				}
			}
			// If the character at end and start are not same the window moves forward
			else {
				end++;
				start=end;
			}
		}
		// If the loop doesn't return false at any stage then the input String is valid
		return true;
	}
	
	// Function to calculate the integer value of Roman string
	public static int evaluate(HashMap<Character,Integer> hm,String str,int n) {
		int total=0; //Initially a total variable with value =0
		// Run the loop till the last but one character
		for(int i=0;i<n-1;i++) {
			// store the two values of two indexes (current index & following index)
			int num1=hm.get(str.charAt(i));
			int num2=hm.get(str.charAt(i+1));
			// If the value of first index is greater than value of second index add the first value to total
			if(num1>= num2) {
				total+=num1;
			}
			// If the value of first index is less than value of second index subtract the first value from total
			else {
				total-=num1;
			}
		}
		// after the loop add the value of the last character of the input explicitly
		total+=hm.get(str.charAt(n-1));
		// return the total value.
		return total;
	}
}

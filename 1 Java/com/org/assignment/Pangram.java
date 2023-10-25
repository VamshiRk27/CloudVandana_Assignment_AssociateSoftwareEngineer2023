package com.org.assignment;
import java.util.*;

public class Pangram {

	// Question : Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)
	
	/* The basic approach is to store the occurrences of each character in a character array. 
	 *  Then loop over the array to check the occurrence of each character.
	 *  Whenever a character occurrence value is encountered as 0 then it implies that the particular character doesn't exist in the word.
	 *  Therefore we can return a false, if the occurrences are greater than 0 the letters exist we return true.
	 */
	
	public static void main(String[] args) {
		try (// Scanner instance to read the input given by the user.
		Scanner scan = new Scanner(System.in)) {
			System.out.println("Please enter the Input:");
			String str=scan.next();
			str=str.toLowerCase(); // Convert the string to lower case for easy calculation and constant memory allocation(array)
			int[] arr=new int[26]; // Array to store the instances of character in the user input string.
			
			// If the given input string is less than 26 characters pangram condition fails.
			if(str.length()<26) {
				System.out.println("false");
				return;
			}
			
			// Iterate over the string and store the no.of instances/occurrence of each character of the string.
			for(int i=0;i<str.length();i++) {
				char ch=str.charAt(i);
				// the char is converted into integer value based on ASCII standard  and instance of character(at the index) is increased
				arr[ch-'a']++;
			}
			
			// Iterate over the array in which occurrence's of character are stored.
			for(int i=0;i<arr.length;i++) {
				// If any character wasn't present in the string then the occurrence at that particular index wouldn't increased.
				if(arr[i]==0) {
					System.out.println("false");
					return;
				}
			}
		}
		// If all the occurrence's of every alphabet is present the string is a "Pangram".
		System.out.println("true");
		return;
	}

}

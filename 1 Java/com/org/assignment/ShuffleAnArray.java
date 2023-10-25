package com.org.assignment;
import java.util.*;


public class ShuffleAnArray {
	
	// Question: Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
	public static void main(String[] args) {
		// Creating a custom Array
		int[] array= {1,2,3,4,5,6,7};
		
		//	 Printing Array values before performing shuffle operation.
		System.out.println("Array before Shuffle:");
		for(int i=0;i<array.length;i++) {
			System.out.print(array[i]+" ");
		}
		
		System.out.println();
		shuffle(array); // Call the function and perform Shuffle operation
		
		//	 Printing Array values after performing shuffle operation.
		System.out.println("Array after Shuffle:");
		for(int i=0;i<array.length;i++) {
			System.out.print(array[i]+" ");
		}
		
	}
	
	public static void shuffle(int[] array){
		// Creating an instance of Random class
		Random random=new Random();
		
		// Iterating over the loop we perform shuffle operation at each Index
		for(int i=0;i<array.length;i++) {
			int swapIndex=random.nextInt(array.length); // random index less than or equal to Array Length
			int helper=array[i]; // variable to store current value
			
			// swap values
			array[i]=array[swapIndex];
			array[swapIndex]=helper;
		}
	}
}

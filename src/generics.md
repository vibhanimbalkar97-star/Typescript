 Generics (<T>)
 What is it?
 Generics allow you to write reusable code that works with different data types while maintaining type safety.
 Instead of writing separate functions for string, number, etc., you write one generic function.

 =================================================================
 Without Generics
 function getString(value: string): string {
   return value;
 }

 function getNumber(value: number): number {
   return value;
 }
 Too much duplicate code.
 =====================================================================

 With Generics
 function getValue<T>(value: T): T {
   return value;
 }

 console.log(getValue("Hello"));
 console.log(getValue(100));
 console.log(getValue(true));
 Use Cases
 API responses
 Reusable functions
 Reusable React components
 Custom Hooks

 Example:

 function firstElement<T>(arr: T[]): T {
   return arr[0];
 }

 firstElement([1, 2, 3]);
 firstElement(["A", "B"]);

// primitive
let a: string = "hello";
let b: number = 12;
let c: boolean = true;

// Arrays
let arr: number[] = [1, 2, 3, 4, 5];
let ar: string[] = ["a", "b", "c", "d"];

// Tuples (have a fixed size of data)A tuple is an array with a fixed number of elements, where each position has a specific type.
let d: [number, string] = [12, "a"];

// Any (avoid to use)
let e: any = 12;
e = "abcd";

// unknown (safer than any)
let m: unknown = 12;
m = "abcd";

// null and undefined
let n: null = null;
let r: undefined = undefined;

// Enums (contain specific values)
enum color {
  Red,
  pink,
  blue,
}
let colors: color = color.pink;

// Function= void(without return keyword)
function hello(message: string): void {
  console.log(message);
}
hello("hi");

// primitive types
let User: string = "abc";
let Gender: string = "male";

// by using type alias
type value = string;
let User1: value = "abcd";
let Gender1: value = "male";
// =======================================================================================================

// in object
type product = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let Product: product = {
  name: "karan",
  age: 25,
  isAdmin: true,
};
// ===========================================================================================================

// Union types
type status = "loading" | "success" | "error"

let statuss:status = "loading"
statuss = "success"

// Type alias vs Interface
// Interfaces can be extended, type aliases cannot
// Interfaces can be declared multiple times and will merge
// Use interfaces for object shapes, type aliases for unions/intersections

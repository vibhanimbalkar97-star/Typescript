/**
 * // Union type(OR - |)
type User = number | string;

function numberOrstring(a: User): void {
  if (typeof a === "string") {
    console.log(`String: ${a.toUpperCase()}`);
  } else {
    console.log(`Number: ${a.toFixed(2.6)}`);
  }
}
numberOrstring("abc");
numberOrstring("a");
numberOrstring(8);
numberOrstring(5.9);

type Status = "loading" | boolean;

function setStatus(value: Status): void {
  console.log(`Status set to ${value}`);
}
setStatus("loading");
setStatus(true);
setStatus(50); // Error!

// Intersection type (AND - &)
interface shape {
  color: string;
}

interface circle {
  radius: number;
}

type colourful = shape & circle;

let Details: colourful = {
  color: "red",
  radius: 5,
};

 */
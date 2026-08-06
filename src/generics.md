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

Generics are one of the most frequently asked TypeScript interview topics. Here's a simple Hindi explanation.

---

# What is Generic?

### Interview Definition

> **Generic हमें reusable code लिखने की सुविधा देता है, जो किसी भी data type (`string`, `number`, `boolean`, object आदि) के साथ काम कर सकता है।**

Generic का symbol होता है:

```ts
<T>
```

`T` का मतलब है **Type** (आप कोई भी नाम रख सकते हैं: `T`, `U`, `K` आदि).

---

# Why do we use Generics?

मान लीजिए आपको एक function चाहिए जो value return करे।

### Without Generic ❌

```ts
function getString(value: string) {
  return value;
}

function getNumber(value: number) {
  return value;
}
```

अब अगर `boolean` भी चाहिए तो एक और function लिखना पड़ेगा।

```ts
function getBoolean(value: boolean) {
  return value;
}
```

👉 हर type के लिए नया function।

---

### With Generic ✅

```ts
function getValue<T>(value: T): T {
  return value;
}

console.log(getValue("Karan"));
console.log(getValue(100));
console.log(getValue(true));
```

एक ही function सभी types के लिए काम करेगा।

---

# If we don't use Generics?

* बार-बार same code लिखना पड़ेगा.
* Code duplicate होगा.
* Maintain करना मुश्किल होगा.

---

# 1. Generic Function

### Use Case

जब एक ही function कई data types पर काम करे।

```ts
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([10, 20, 30]));
console.log(firstElement(["A", "B", "C"]));
```

### Output

```
10
A
```

**Interview Answer:**

> **Generic Function एक ऐसा function है जो multiple data types के साथ type safety के साथ काम करता है।**

---

# 2. Generic Interface

### Without Generic

```ts
interface User {
  data: string;
}
```

अगर `number` data चाहिए?

फिर नई interface बनानी पड़ेगी।

---

### With Generic

```ts
interface ApiResponse<T> {
  data: T;
}

const user: ApiResponse<string> = {
  data: "Karan",
};

const age: ApiResponse<number> = {
  data: 25,
};
```

एक ही interface सभी types के लिए।

### Use Case

* API Response
* Form Data
* Redux State

---

# 3. Generic Class

### Example

```ts
class Box<T> {
  constructor(public value: T) {}
}

const box1 = new Box<string>("Hello");
const box2 = new Box<number>(100);

console.log(box1.value);
console.log(box2.value);
```

Output

```
Hello
100
```

### Why use?

अगर class अलग-अलग types का data store करे।

Example:

* Cart
* Storage
* Cache
* Queue

---

# React Real Example ⭐⭐⭐⭐⭐

```tsx
interface User {
  id: number;
  name: string;
}

const [users, setUsers] = useState<User[]>([]);
```

यहाँ

```ts
User[]
```

एक generic type है।

---

# Another React Example

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

`HTMLInputElement` generic type argument है।

---

# Interview Summary

| Topic             | Why Use?                               |
| ----------------- | -------------------------------------- |
| Generic           | Reusable code                          |
| Generic Function  | Same function for multiple data types  |
| Generic Interface | Same interface for multiple data types |
| Generic Class     | Same class for multiple data types     |

---

# Easy Trick to Remember

Without Generic ❌

```text
String → Function 1

Number → Function 2

Boolean → Function 3
```

बहुत duplication.

---

With Generic ✅

```text
One Function

↓

String ✔

Number ✔

Boolean ✔

Object ✔
```

---

# 30-Second Interview Answer

> **Generics का उपयोग reusable और type-safe code लिखने के लिए किया जाता है। अगर Generics का उपयोग नहीं करेंगे, तो हर data type के लिए अलग function, class या interface लिखना पड़ेगा, जिससे code duplication बढ़ेगा। Generics एक ही function, class या interface को अलग-अलग data types के साथ काम करने की सुविधा देते हैं।**

Great question. The reason is that **TypeScript doesn't know what type `T` is inside the generic function**.

Your code:

```ts
function greet<T>(arg: T) {
    console.log(arg)
}

greet("Hello");
greet<number>(26);
```

Inside the function:

```ts
arg.
```

❌ You won't get methods like `.toUpperCase()` or `.toFixed()` because `T` can be **anything**.

It could be:

```ts
string
number
boolean
object
array
```

Since TypeScript doesn't know the actual type at the time the function is written, it only allows methods common to all types (very few).

---

## Example

```ts
function greet<T>(arg: T) {
    arg. // ❌ No string methods
}
```

Because tomorrow someone might call:

```ts
greet(10);
greet(true);
greet({});
```

If TypeScript allowed:

```ts
arg.toUpperCase();
```

What would happen when you call:

```ts
greet(10);
```

❌ Runtime error, because `10` doesn't have `toUpperCase()`.

---

# How to get IntelliSense?

### Option 1: Use a normal type

```ts
function greet(arg: string) {
    console.log(arg.toUpperCase());
}
```

Now after `arg.` you'll see:

* `toUpperCase()`
* `trim()`
* `includes()`

because TypeScript knows `arg` is a string.

---

### Option 2: Constrain the Generic

If you want only strings:

```ts
function greet<T extends string>(arg: T) {
    console.log(arg.toUpperCase());
}

greet("Hello");
```

Now `arg.` gives string methods because you've told TypeScript:

> **`T` can only be a string (or a subtype of string).**

---

## Easy Analogy

Without constraint:

```ts
T = ?
```

TypeScript thinks:

> "I don't know what this is."

So it won't show type-specific methods.

With constraint:

```ts
T extends string
```

TypeScript thinks:

> "Now I know it's definitely a string."

So it shows:

```ts
arg.toUpperCase()
arg.trim()
arg.includes()
```

---

## Interview Answer

**Q: Why don't we get IntelliSense inside a generic function?**

> **Because `T` is an unknown type. TypeScript cannot assume it is a string, number, or any specific type, so it doesn't allow type-specific methods. If you want those methods, you need to constrain the generic using `extends`, for example `T extends string`.**


Yes, **absolutely.** 👍 You can use a **type guard** inside a generic function when you need to perform operations specific to a type.

### Example

```ts
function greet<T>(arg: T) {
  if (typeof arg === "string") {
    console.log(arg.toUpperCase()); // ✅ Works
  } else if (typeof arg === "number") {
    console.log(arg.toFixed(2)); // ✅ Works
  } else {
    console.log(arg);
  }
}

greet("Hello");
greet(26);
greet(true);
```

### Output

```text
HELLO
26.00
true
```

---

## Why does this work?

Initially:

```ts
arg: T
```

TypeScript doesn't know what `T` is.

After the type guard:

```ts
if (typeof arg === "string")
```

TypeScript narrows the type of `arg` **inside that block** to `string`, so it allows:

```ts
arg.toUpperCase();
```

Similarly,

```ts
if (typeof arg === "number")
```

narrows `arg` to `number`, so:

```ts
arg.toFixed(2);
```

is allowed.

---

## When to use which?

### 1. Use a type guard when the generic can be multiple types

```ts
function greet<T>(arg: T) {
  if (typeof arg === "string") {
    console.log(arg.toUpperCase());
  }
}
```

---

### 2. Use `extends` when you want to restrict the generic to one type

```ts
function greet<T extends string>(arg: T) {
  console.log(arg.toUpperCase());
}
```

Now only strings are allowed:

```ts
greet("Hello"); // ✅
greet(10);      // ❌ Error
```

---

## Interview Rule

* **Type Guard (`typeof`, `instanceof`, `in`)** → Use when the generic can accept **different types**, and you want to handle each type differently.
* **Generic Constraint (`extends`)** → Use when you want to **restrict** the generic to a specific type or shape from the beginning.

This distinction is commonly tested in TypeScript interviews.

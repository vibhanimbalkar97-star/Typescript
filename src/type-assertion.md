/*
# Interview Definition

> **Type Assertion tells TypeScript, "I know the type of this value better than you do."** It only affects compile-time type checking and **does not change the actual value at runtime**.

# Syntax
There are two ways.
### 1. `as` (Recommended)

```ts
let value: unknown = "Hello";

let str = value as string;

console.log(str.length);
```

### 2. Angle Brackets (Avoid in React)

```ts
let value: unknown = "Hello";

let str = <string>value;
```

In React (`.tsx` files), this syntax conflicts with JSX, so prefer `as`.

---

# Why Do We Need Type Assertion?

Suppose we have:

```ts
let value: unknown = "TypeScript";
```

If you try:

```ts
console.log(value.length);
```

❌ Error

```text
Property 'length' does not exist on type 'unknown'
```

TypeScript doesn't know whether `value` is a string, number, or something else.

So we tell TypeScript:

```ts
let str = value as string;

console.log(str.length);
```

Output

```
10
```

---

# Real Interview Example 1 (API Response)

```ts
const response: unknown = {
    id: 1,
    name: "John"
};

interface User {
    id: number;
    name: string;
}

const user = response as User;

console.log(user.name);
```

Here we're telling TypeScript that `response` follows the `User` interface.

---

# Real Interview Example 2 (DOM)

Very common in React and JavaScript.

```ts
const input = document.getElementById("username");
```

TypeScript infers:

```ts
HTMLElement | null
```

But only `HTMLInputElement` has a `.value` property.

```ts
const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```

This is one of the most common uses of type assertion.

---

# Real Interview Example 3 (React useRef)

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

Sometimes you'll see:

```ts
const input = document.querySelector("input") as HTMLInputElement;

input.focus();
```

---

# Does Type Assertion Convert the Type?

No.

```ts
let value = "100";

let num = value as unknown as number;

console.log(num + 10);
```

It **doesn't convert** `"100"` into `100`.

At runtime, `num` is still a string, so the output will be:

```
10010
```

If you want conversion, use:

```ts
Number(value)
```

or

```ts
parseInt(value)
```

---

# Type Assertion vs Type Casting

Many interviewers ask this.

| Type Assertion           | Type Casting                                             |
| ------------------------ | -------------------------------------------------------- |
| Compile-time only        | Runtime conversion                                       |
| Doesn't change the value | Changes the value                                        |
| Used by TypeScript       | Used by JavaScript (`Number()`, `String()`, `Boolean()`) |

Example:

```ts
// Type Assertion
const value = "100" as string;

// Type Casting
const num = Number("100");
```

---

# When Should We Use Type Assertion?

✅ DOM Elements

```ts
const btn = document.getElementById("btn") as HTMLButtonElement;
```

✅ API Responses

```ts
const user = data as User;
```

✅ Working with `unknown`

```ts
const value = response as string;
```

---

# When Should We Avoid It?

Avoid asserting a type unless you're reasonably sure it's correct.

```ts
let value: unknown = 100;

let str = value as string;

console.log(str.length);
```

TypeScript allows this, but at runtime you'll get an error because `100` isn't a string.

A safer approach is type narrowing:

```ts
if (typeof value === "string") {
    console.log(value.length);
}
```

---

# Interview Questions

### 1. What is Type Assertion?

> It tells TypeScript to treat a value as a specific type without changing the actual value at runtime.

---

### 2. Does Type Assertion change the data type?

**No.** It only affects TypeScript's type checking during compilation.

---

### 3. Difference between `as` and `<type>`?

* `as` works everywhere and is recommended.
* `<type>` is older syntax and is generally avoided in React because it conflicts with JSX.

---

### 4. When do you use Type Assertion?

* Accessing DOM elements
* Handling `unknown` values
* Working with trusted API responses
* Interoperating with third-party libraries

---

### 5. Is Type Assertion safe?

It is safe **only when you're confident about the actual type**. If you're unsure, use type guards (`typeof`, `instanceof`, or custom guards) instead of asserting. This avoids runtime errors.

**Interview tip:** A strong answer is to mention that **type assertion is not a replacement for validation**. If data comes from an external source (like an API), you should validate it before asserting its type.
*/

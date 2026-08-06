## Enum in TypeScript (Interview Ready)

### Definition

> **Enum is a TypeScript feature used to define a fixed set of named constants.**

It makes your code more readable and avoids using hardcoded values.

---

## Without Enum ❌

```ts
let status = "SUCCESS";
```

If you accidentally write:

```ts
status = "SUCESS"; // Typo
```

No error.

---

## With Enum ✅

```ts
enum Status {
  Loading,
  Success,
  Error,
}

let status = Status.Success;

console.log(status);
```

Output:

```text
1
```

---

## String Enum

```ts
enum Status {
  Loading = "LOADING",
  Success = "SUCCESS",
  Error = "ERROR",
}

console.log(Status.Success);
```

Output:

```text
SUCCESS
```

---

## Why Use Enum?

When you have a **fixed set of values** like:

* Order Status
* User Role
* Payment Status
* Directions (North, South, East, West)

Example:

```ts
enum Role {
  Admin,
  User,
  Manager,
}
```

---

## Enum vs Literal Types

```ts
type Status = "loading" | "success" | "error";
```

For most modern React/TypeScript projects, **literal types are often preferred** because they are simpler and work well with TypeScript's type system.

---

## Interview Answer

> **Enum is a TypeScript feature used to group a fixed set of named constants, making the code more readable and preventing invalid values.**

---

## Easy Trick

```text
Enum = Fixed named values

Status
├── Loading
├── Success
└── Error
```

### One-line Memory Trick

👉 **Use an `enum` when your application has a fixed set of related constant values.**

### Definition

> **A Type Alias is used to give a custom name to a type.** It makes code reusable and easier to read.

---

## Syntax

```ts
type User = {
  name: string;
  age: number;
};
```

Now use it:

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Karan",
  age: 25,
};
```

---

## Why use Type Alias?

Instead of writing this repeatedly:

```ts
const user1: {
  name: string;
  age: number;
} = { ... };

const user2: {
  name: string;
  age: number;
} = { ... };
```

Create one alias:

```ts
type User = {
  name: string;
  age: number;
};
```

Reuse it everywhere.

---

## Real React Use Case

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

const [users, setUsers] = useState<User[]>([]);
```

---

## Another Use Case (Union Types)

```ts
type Status = "loading" | "success" | "error";

let status: Status = "loading";
```

---

## Interview Question

### What is Type Alias?

> **Type Alias is a way to create a custom name for any type, making the code reusable and more readable.**

---

## Type Alias vs Interface

| Type Alias                                     | Interface                     |
| ---------------------------------------------- | ----------------------------- |
| Can define objects, unions, primitives, tuples | Mainly used for object shapes |
| Uses `type` keyword                            | Uses `interface` keyword      |

### Example

```ts
type Name = string;
```

✅ Valid

```ts
interface Name = string;
```

❌ Invalid

---

### Easy Trick to Remember

* **Type Alias** = **Nickname for any type**.
* **Interface** = **Blueprint for an object**.

**For React interviews:** Use **`interface`** for object shapes (props, API responses) and **`type`** when you need unions, tuples, or aliases for primitive types.

Here are simple, interview-ready examples.

---

# 1. Primitive Type Alias

Use when you want to give a custom name to a primitive type (`string`, `number`, `boolean`).

```ts
type UserName = string;

let name: UserName = "Karan";

console.log(name);
```

Another example:

```ts
type Age = number;

let age: Age = 25;
```

### Use Case

Instead of writing `string` or `number` everywhere, give it a meaningful name.

---

# 2. Union Type Alias

Use when a variable can have **multiple possible types**.

```ts
type Id = string | number;

let userId: Id = 101;

userId = "EMP101";
```

### React Example

API can return:

```ts
type Status = "loading" | "success" | "error";

let status: Status = "loading";

status = "success";
```

❌ Invalid

```ts
status = "pending";
```

Error because `"pending"` isn't part of the union.

### Use Case

* API status
* User roles
* Payment methods
* IDs

---

# 3. Tuple Type Alias

A tuple is an array with a **fixed number of elements**, where each position has a specific type.

```ts
type User = [string, number];

let user: User = ["Karan", 25];
```

Here:

* First value → `string`
* Second value → `number`

❌ Wrong

```ts
let user: User = [25, "Karan"];
```

TypeScript will show an error.

### Real-life Example

Store coordinates:

```ts
type Coordinate = [number, number];

const location: Coordinate = [18.52, 73.85];
```

Store employee details:

```ts
type Employee = [number, string, boolean];

const emp: Employee = [101, "Karan", true];
```

Meaning:

* `101` → Employee ID
* `"Karan"` → Name
* `true` → Active

---

# Interview Summary

### Primitive

```ts
type Name = string;
```

**Use:** Give a custom name to a primitive type.

---

### Union

```ts
type Id = string | number;
```

**Use:** Variable can have more than one type.

---

### Tuple

```ts
type User = [string, number];
```

**Use:** Fixed-size array where each position has a predefined type.

---

## Easy Trick to Remember

| Type Alias | Example                        | Use Case                                |
| ---------- | ------------------------------ | --------------------------------------- |
| Primitive  | `type Name = string`           | Custom name for a primitive             |
| Union      | `type Id = string \| number`   | Multiple possible types                 |
| Tuple      | `type User = [string, number]` | Fixed order and fixed types in an array |

These three are among the most common `type` alias patterns you'll encounter in TypeScript interviews.
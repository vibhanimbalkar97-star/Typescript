This is a very common TypeScript interview question.

# Type Assertion vs Type Guard

| Type Assertion                               | Type Guard                                          |
| -------------------------------------------- | --------------------------------------------------- |
| Tells TypeScript to trust you about the type | Checks the type at runtime before using it          |
| No runtime check                             | Performs a runtime check                            |
| Can be unsafe if used incorrectly            | Safe because it verifies the type                   |
| Uses `as`                                    | Uses `typeof`, `instanceof`, `in`, or custom guards |

---

# 1. Type Assertion

### Meaning

> **"I know the type better than TypeScript."**

```ts
let value: unknown = "Hello";

let str = value as string;

console.log(str.toUpperCase());
```

You are telling TypeScript:

> "Trust me, this is a string."

No checking happens.

---

### Problem

```ts
let value: unknown = 100;

let str = value as string;

console.log(str.length);
```

✅ Compiles

❌ Runtime error (because `100` is not a string)

---

# 2. Type Guard

### Meaning

> **"First check the type, then use it."**

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

Here TypeScript verifies that `value` is actually a string.

Safe.

---

# Real-Life Example

Suppose API returns

```ts
let data: unknown;
```

### Type Assertion

```ts
const user = data as User;
```

You are assuming the API returns a `User`.

---

### Type Guard

```ts
if (
    typeof data === "object" &&
    data !== null &&
    "name" in data
) {
    console.log(data.name);
}
```

Here you verify before using the data.

---

# When to Use?

### Use Type Assertion

✅ When you are **100% sure** about the type.

Example:

```ts
const input = document.getElementById("name") as HTMLInputElement;

console.log(input.value);
```

You know the element is an `<input>`.

---

### Use Type Guard

✅ When the type is **not known**.

Example:

```ts
function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

---

# Interview Answer

**What is the difference between Type Assertion and Type Guard?**

> **Type Assertion tells TypeScript to trust the developer without checking the type, whereas Type Guard checks the type at runtime and safely narrows it before use. Type Assertion can be unsafe if the assumption is wrong, while Type Guards are safer because they verify the actual type.**

---

## Easy Trick to Remember

* **Type Assertion** = **"Trust Me"** (`as`)
* **Type Guard** = **"Check First"** (`typeof`, `instanceof`, `in`)

### One-line Rule

* **Know the type?** → Use **Type Assertion**.
* **Don't know the type?** → Use **Type Guard**.


Yes. Both **`instanceof`** and **`in`** can be used with objects, but they are used in different scenarios.

---

# 1. `instanceof` → Use with Classes ✅

Use `instanceof` when objects are created using **classes** (`new` keyword).

### Example

```ts
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function sound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

### Why?

Because `Dog` and `Cat` are **classes**.

```ts
const dog = new Dog();
```

`dog` is an instance of `Dog`.

---

# 2. `in` → Use with Interfaces or Object Types ✅

Interfaces don't exist at runtime, so you **cannot** use `instanceof` with them.

### Example

```ts
interface Admin {
  name: string;
  deleteUser: () => void;
}

interface Customer {
  name: string;
  buyProduct: () => void;
}

function check(user: Admin | Customer) {
  if ("deleteUser" in user) {
    user.deleteUser();
  } else {
    user.buyProduct();
  }
}
```

### Why?

Because `Admin` and `Customer` are **interfaces**, not classes.

At runtime, TypeScript interfaces disappear, so `instanceof Admin` is impossible.

---

# Can `in` be used with Classes?

Yes, if you want to check whether a property exists.

```ts
class Dog {
  bark() {}
}

const dog = new Dog();

if ("bark" in dog) {
  console.log("Dog has bark method");
}
```

But if your goal is to know **whether the object is a `Dog`**, `instanceof` is the better choice.

---

# Easy Interview Rule

| Situation                         | Use          |
| --------------------------------- | ------------ |
| Object created with `new Class()` | `instanceof` |
| Check if an object has a property | `in`         |
| Interfaces / object literals      | `in`         |

---

## Interview Answer

* **`instanceof`** → Use when working with **classes** to check if an object is created from a particular class.
* **`in`** → Use when working with **interfaces or object literals** to check whether a property exists on an object.

### Easy Trick

```text
Class  → instanceof ✅
Interface/Object → in ✅
Property check → in ✅
```

This is the rule most interviewers expect you to know.

/**
 ## 1. Type Guard

### Definition (Interview)

> **Type Guard is a way to check the actual type of a variable at runtime before using it.**

It helps TypeScript safely narrow a variable's type.

### Example (`typeof`)

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, `typeof` acts as a **type guard**.

### Common Type Guards

* `typeof` → Primitive types (`string`, `number`, `boolean`)
* `instanceof` → Classes/Objects
* `in` → Checks if a property exists
* Custom type guard (`is` keyword)

---

## 2. `instanceof`

### Definition (Interview)

> **`instanceof` checks whether an object is created from a particular class (constructor).**

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

Here, `instanceof` tells TypeScript whether `animal` is a `Dog` or a `Cat`.

---

## Difference

| Type Guard                                       | `instanceof`                    |
| ------------------------------------------------ | ------------------------------- |
| General technique for narrowing types            | One specific type guard         |
| Uses `typeof`, `instanceof`, `in`, custom guards | Only works with classes/objects |
| Works for many scenarios                         | Checks object's class           |

### Interview Tip

* Use **`typeof`** for primitive types.
* Use **`instanceof`** for objects created from classes.
* Use **`in`** when checking for object properties.
* Use **custom type guards** for complex types or interfaces.
* 
* ===============================================================================================================
* 
* The **main use case** of type guards is:

> **When a variable can have multiple types, use a type guard to find its actual type before using it.**

---

## 1. `typeof` (Primitive Types)

### Use Case

When a variable can be a **string, number, or boolean**.

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### Real-life Example

User input can be:

```ts
string | number
```

Use `typeof` to know which one it is.

✅ **Use `typeof` for:** `string`, `number`, `boolean`, `undefined`, `symbol`, `bigint`.

---

## 2. `instanceof` (Classes/Objects)

### Use Case

When a variable can be an object created from **different classes**.

```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function sound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

### Real-life Example

Suppose a payment app has:

```ts
class CreditCard {}
class UPI {}
```

Before processing payment:

```ts
if (payment instanceof CreditCard) {
  // Credit card payment
} else {
  // UPI payment
}
```

---

## Interview Answer (30 seconds)

* **`typeof`** → Use when checking **primitive types** like `string`, `number`, or `boolean`.
* **`instanceof`** → Use when checking whether an **object belongs to a specific class**.

### Easy way to remember

| Type Guard   | Use Case                                                      |
| ------------ | ------------------------------------------------------------- |
| `typeof`     | Primitive values (`string`, `number`, `boolean`)              |
| `instanceof` | Objects created using a **class** (`new Dog()`, `new User()`) |

=================================================================================================================

The easiest way to understand is by asking:

> **"Can this variable have more than one type?"**

If **YES**, use a **type guard** to find its actual type before using it.

---

# Scenario 1: `typeof`

### When to use?

When the variable can be a **primitive type** (`string`, `number`, `boolean`).

### Example: User Input

```ts
function calculate(value: string | number) {
  if (typeof value === "number") {
    return value * 2;
  }

  return value.toUpperCase();
}
```

### Why?

Because `value` could be either:

* `"hello"` (string)
* `100` (number)

So first check the type.

**Real-world use cases:**

* User input
* Function parameters
* API values that may vary

---

# Scenario 2: `instanceof`

### When to use?

When the variable can be an object created from **different classes**.

Example:

```ts
class Admin {
  deleteUser() {}
}

class Customer {
  buyProduct() {}
}
```

Now:

```ts
function login(user: Admin | Customer) {
  if (user instanceof Admin) {
    user.deleteUser();
  } else {
    user.buyProduct();
  }
}
```

### Why?

Because you need to know:

* Is this an **Admin**?
* Or a **Customer**?

Then call the correct method.

**Real-world use cases:**

* Banking system
* Employee management
* Payment methods
* Game characters
* OOP-based applications

---

# React Interview Reality

### `typeof` ✅ Used often

```ts
function search(value: string | number) {
    if (typeof value === "string") {
        // search by name
    } else {
        // search by id
    }
}
```

---

### `instanceof` ❌ Used less in React

Mostly used in:

* OOP
* Backend (Node.js)
* Libraries
* Custom classes

---

# Easy Trick to Remember

Suppose someone gives you a box.

### Box 1

It contains either:

* `"Vibha"`
* `25`

Ask:

> **Is it a string or a number?**

➡️ Use **`typeof`**

---

### Box 2

It contains either:

* `new Dog()`
* `new Cat()`

Ask:

> **Is this object created from the `Dog` class or the `Cat` class?**

➡️ Use **`instanceof`**

---

## Interview One-Line Answer

* **`typeof`** → Use when checking **primitive values** (`string`, `number`, `boolean`) before performing operations specific to that type.
* **`instanceof`** → Use when checking whether an **object was created from a particular class**, so you can safely access that class's methods or properties.

 */

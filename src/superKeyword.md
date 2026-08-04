## `super` Keyword (Interview Ready)

### Definition

> **`super` is used inside a child class to access the parent class's constructor or methods.**

---

# Why do we use `super`?

Suppose the parent class already has some code. Instead of writing it again, the child class can reuse it using `super`.

---

# 1. `super()` → Calls Parent Constructor (Most Common)

```ts
class Animal {
  constructor(public name: string) {
    console.log("Animal Constructor");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // Calls Animal constructor
  }
}

const dog = new Dog("Tommy");
```

### Output

```text
Animal Constructor
```

### Flow

```text
new Dog("Tommy")
        ↓
Dog constructor
        ↓
super(name)
        ↓
Animal constructor
```

---

# 2. `super.method()` → Calls Parent Method

```ts
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Parent method
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak();
```

### Output

```text
Animal speaks
Dog barks
```

---

# When to Use `super`?

Use `super` **only in child classes** (`extends`).

```text
Parent Class
      ↑
extends
      ↑
Child Class
```

If there is no `extends`, there is no `super`.

---

# Interview Questions

### 1. What is `super`?

> **`super` is used in a child class to access the parent class's constructor or methods.**

---

### 2. Why do we use `super()`?

> **To call the parent class constructor and initialize the inherited properties.**

---

### 3. Why must `super()` be called before `this`?

Because the parent class must initialize the object first.

❌ Wrong

```ts
class Dog extends Animal {
  constructor(name: string) {
    this.name = name; // Error
    super(name);
  }
}
```

✅ Correct

```ts
class Dog extends Animal {
  constructor(name: string) {
    super(name);
    console.log(name);
  }
}
```

---

# Easy Trick to Remember

* **`extends`** → Inherit from parent.
* **`super()`** → Call the parent constructor.
* **`super.method()`** → Call a parent method.

---

## Interview Summary

| Keyword          | Purpose                   |
| ---------------- | ------------------------- |
| `extends`        | Inherit from parent class |
| `super()`        | Call parent constructor   |
| `super.method()` | Call parent method        |

### One-line Memory Trick

> **`extends` creates the parent-child relationship, and `super` lets the child use the parent's constructor or methods.**





**No.** The `name` parameter in the `Dog` constructor is **not coming from the parent**. It is a parameter of the **child constructor**.

Let's see the flow.

```ts
class Animal {
  constructor(public name: string) {
    console.log(name);
  }
}

class Dog extends Animal {
  constructor(name: string) {   // ← This name belongs to Dog
    super(name);                // ← Passes Dog's name to Animal
  }
}

const dog = new Dog("Tommy");
```

### Flow

```text
new Dog("Tommy")
        │
        ▼
Dog constructor(name = "Tommy")
        │
        ▼
super(name)
        │
        ▼
Animal constructor(name = "Tommy")
        │
        ▼
this.name = "Tommy"
```

### Think of it like passing an argument to a function

```ts
function parent(name: string) {
  console.log(name);
}

function child(name: string) {
  parent(name);
}

child("Tommy");
```

Here:

* `child` has its own `name` parameter.
* It passes that value to `parent(name)`.

The same thing happens with `super(name)`.

---

## Another Example

```ts
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public age: number) {
    super(name);
  }
}

const dog = new Dog("Bruno", 3);

console.log(dog.name); // Bruno
console.log(dog.age);  // 3
```

* `name` is received by the **Dog** constructor.
* `super(name)` passes it to the **Animal** constructor.
* `Animal` stores it as `this.name`.

---

### Interview Answer

**Is `name` in the child constructor coming from the parent?**

**No.** The `name` parameter belongs to the **child constructor**. The child receives the value first, then `super(name)` passes it to the parent constructor so the parent can initialize its own properties.

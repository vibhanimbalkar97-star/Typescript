## 1. `static` Keyword

### Definition (Interview)

> **`static` member class का होता है, object का नहीं। इसलिए इसे object बनाए बिना directly class के नाम से access किया जाता है।**

---

### Normal Property

```ts
class User {
  name = "Karan";
}

const user = new User();

console.log(user.name);
```

यहाँ object बनाना जरूरी है।

---

### Static Property

```ts
class User {
  static company = "Google";
}

console.log(User.company);
```

Output

```text
Google
```

👉 यहाँ object बनाने की जरूरत नहीं।

---

### Static Method

```ts
class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtil.add(10, 20));
```

Output

```text
30
```

---

### कब Use करते हैं?

जब कोई value **सभी objects के लिए same हो**।

Examples:

* Company Name
* App Version
* Utility Functions (`Math.max()`, `Date.now()`)
* Constants

---

### Easy Trick

```
Normal → Object से Access

Static → Class से Access
```

---

## 2. `abstract` Class

### Definition (Interview)

> **Abstract class एक अधूरी (incomplete) class होती है, जिसका object नहीं बनाया जा सकता। इसे केवल inherit (`extends`) किया जाता है।**

---

### Example

```ts
abstract class Animal {
  abstract sound(): void;
}
```

❌ यह गलत है:

```ts
const a = new Animal();
```

क्योंकि abstract class का object नहीं बन सकता।

---

### Correct Example

```ts
abstract class Animal {
  abstract sound(): void;
}

class Dog extends Animal {
  sound() {
    console.log("Woof");
  }
}

const dog = new Dog();

dog.sound();
```

Output

```text
Woof
```

---

### `abstract` Method

```ts
abstract sound(): void;
```

इसका मतलब:

> **Parent class सिर्फ method का नाम बताती है। Method के अंदर क्या होगा, यह child class तय करेगी।**

---

### Real-Life Example

**Vehicle**

```ts
abstract class Vehicle {
    abstract start(): void;
}
```

Car

```ts
class Car extends Vehicle {
    start() {
        console.log("Car Started");
    }
}
```

Bike

```ts
class Bike extends Vehicle {
    start() {
        console.log("Bike Started");
    }
}
```

Parent केवल rule बनाता है:

```
हर Vehicle में start() होना चाहिए।
```

लेकिन कैसे start होगा, यह child class लिखती है।

---

## कब Use करते हैं?

जब सभी child classes में **एक method होना जरूरी हो**, लेकिन उसका implementation अलग-अलग हो।

Examples:

* Payment (`pay()`)
* Vehicle (`start()`)
* Shape (`draw()`)
* Employee (`calculateSalary()`)

---

## Static vs Abstract

| Static                 | Abstract                        |
| ---------------------- | ------------------------------- |
| Class का member        | अधूरी class                     |
| Object की जरूरत नहीं   | Object नहीं बना सकते            |
| Direct class से access | सिर्फ `extends` कर सकते हैं     |
| Shared data/functions  | Common rules define करने के लिए |

---

## Interview Answer

### What is `static`?

> **`static` member class का होता है, इसलिए उसे object बनाए बिना class के नाम से access किया जाता है।**

### What is `abstract`?

> **`abstract` class का object नहीं बनाया जा सकता। यह common rules या methods define करती है, जिन्हें child classes को implement करना पड़ता है।**

---

## Easy Memory Trick

* **`static` = "सबके लिए एक"** (Shared by the class)
* **`abstract` = "Rule Book"** (Defines rules; child classes must follow them)

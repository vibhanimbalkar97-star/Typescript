# JavaScript OOP Roadmap

```
1. Object
2. Class
3. Constructor
4. Instance
5. Properties & Methods
6. this keyword
7. Access Modifiers (TS)
8. Getter
9. Setter
10. Static
11. Inheritance
12. super()
13. Method Overriding
14. Encapsulation
15. Abstraction
16. Polymorphism
17. instanceof
```

---

# 1. Object

### Definition

> An object is a collection of properties and methods.

```js
const user = {
    name: "Karan",
    age: 25,

    greet() {
        console.log("Hello");
    }
}
```

### Why use?

Store related data together.

---

# 2. Class

### Definition

> A class is a blueprint used to create objects.

```ts
class User {

}
```

### Why use?

To create multiple similar objects.

---

# 3. Object (Instance)

```ts
class User {}

const user1 = new User();
const user2 = new User();
```

`user1` and `user2` are **instances (objects)**.

---

# 4. Constructor

### Definition

> A constructor runs automatically when an object is created.

```ts
class User {

    constructor(name:string){
        console.log(name);
    }

}

const user=new User("Karan");
```

Output

```
Karan
```

### Why use?

Initialize object data.

---

# 5. Properties

Variables inside a class.

```ts
class User{

    name:string="Karan"

}
```

---

# 6. Methods

Functions inside a class.

```ts
class User{

    greet(){
        console.log("Hello")
    }

}
```

---

# 7. this

### Meaning

> Refers to the current object.

```ts
class User{

    name="Karan"

    greet(){
        console.log(this.name)
    }

}
```

---

# 8. Public

Default modifier.

Accessible everywhere.

```ts
class User{

    public name="Karan"

}
```

---

# 9. Private

Accessible only inside the class.

```ts
class User{

    private password="123"

}
```

Cannot access

```ts
user.password
```

---

# 10. Protected

Accessible

✔ Inside class

✔ Child class

❌ Outside

---

# 11. Getter

Returns a value like a property.

```ts
class User{

    name="Karan"

    get userName(){
        return this.name
    }

}

const u=new User();

console.log(u.userName)
```

No ()

---

### Why use?

Hide calculation.

---

# 12. Setter

Updates value like property.

```ts
class User{

    name=""

    set userName(value:string){
        this.name=value
    }

}
```

```
u.userName="Rahul"
```

---

### Why use?

Validate before updating.

---

# 13. Static

Belongs to class.

Not object.

```ts
class MathUtil{

    static PI=3.14

}

console.log(MathUtil.PI)
```

No need

```
new MathUtil()
```

---

# 14. Inheritance

One class uses another class.

```ts
class Animal{

    eat(){
        console.log("Eating")
    }

}

class Dog extends Animal{

}

const dog=new Dog();

dog.eat()
```

---

### Why?

Reuse code.

---

# 15. super()

Calls parent constructor.

```ts
class Animal{

    constructor(public name:string){}

}

class Dog extends Animal{

    constructor(name:string){

        super(name)

    }

}
```

---

# 16. Method Overriding

Child changes parent method.

```ts
class Animal{

    speak(){

        console.log("Animal")

    }

}

class Dog extends Animal{

    speak(){

        console.log("Dog")

    }

}
```

---

# 17. Encapsulation

Hide data.

```ts
private password
```

Access using getter/setter.

---

# 18. Abstraction

Hide implementation.

User only knows how to use.

Example

```
ATM Machine
```

You don't know internal code.

---

# 19. Polymorphism

Same method.

Different behavior.

```ts
Animal -> speak()

Dog -> Woof

Cat -> Meow
```

---

# 20. instanceof

Checks object belongs to class.

```ts
dog instanceof Dog
```

Returns

```
true
```

---

# Ways to Create Objects

### 1

```js
const obj={}
```

---

### 2

```js
const obj=new Object()
```

---

### 3

```js
class User{}

const user=new User()
```

---

### 4

```js
function User(){}

const user=new User()
```

(Constructor Function)

---

# Ways to Write Methods

### Normal

```js
greet(){

}
```

---

### Function Expression

```js
greet=function(){}
```

---

### Arrow

```js
greet=()=>{}
```

(TypeScript class fields)

---

# Frequently Asked Interview Questions

### Basic

✔ What is OOP?

✔ Object vs Class?

✔ Instance?

✔ Constructor?

✔ this keyword?

✔ Why use class?

✔ Getter vs Setter?

✔ Public vs Private vs Protected?

✔ Static?

✔ super()?

✔ instanceof?

✔ Inheritance?

✔ Method Overriding?

✔ Encapsulation?

✔ Polymorphism?

✔ Abstraction?

---

# Tricky Interview Questions

### 1

How many constructors can a class have?

✅ Only one.

---

### 2

Can we create object without class?

✅ Yes.

```js
const obj={}
```

---

### 3

Can class exist without object?

✅ Yes.

```ts
class User{}
```

---

### 4

Can object exist without class?

✅ Yes.

```js
const obj={}
```

---

### 5

Can constructor return value?

Generally **no**. Constructors initialize the object. Returning a primitive is ignored, while returning another object replaces the created instance (rarely used).

---

### 6

Can private property be accessed outside?

❌ No.

---

### 7

Can static method access instance variables?

❌ No, because static methods belong to the class, not to an object.

---

### 8

Why use getter instead of normal function?

It allows access like a property (`user.fullName`) while still running logic internally.

---

### 9

Difference between class and constructor function?

* **Class**: Modern ES6 syntax, cleaner and supports `extends`, `super`.
* **Constructor Function**: Older ES5 pattern using functions and prototypes.

---

### 10

Difference between `extends` and `super()`?

* `extends` → Creates an inheritance relationship.
* `super()` → Calls the parent class constructor.

---

## What to prioritize for React/TypeScript interviews

⭐⭐⭐⭐⭐ Must Know

* Object
* Class
* Constructor
* `this`
* Instance
* Getter & Setter
* `public`, `private`, `protected` (TypeScript)
* `static`
* `extends`
* `super()`
* `instanceof`

⭐⭐⭐ Good to Know

* Encapsulation
* Polymorphism
* Method Overriding

⭐⭐ Basic Understanding Is Enough

* Abstraction
* Constructor Functions (older JavaScript pattern)

Mastering the first group is usually sufficient for most React + TypeScript frontend interviews.

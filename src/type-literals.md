# 1. String Literal Type

Only specific string values are allowed.

```ts
type Status = "loading" | "success" | "error";

let status: Status = "loading";

status = "success"; // ✅
status = "error";   // ✅
status = "pending"; // ❌ Error
```

### Use Cases

* API status
* Theme (`"light" | "dark"`)
* User roles (`"admin" | "user"`)

---

# 2. Numeric Literal Type

Only specific numbers are allowed.

```ts
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

let roll: Dice = 4;

roll = 6; // ✅
roll = 7; // ❌ Error
```

### Use Cases

* Dice game
* Ratings (1–5)
* Weekdays by number (1–7)

Example:

```ts
type Rating = 1 | 2 | 3 | 4 | 5;

let rating: Rating = 5;
```

---

# 3. Boolean Literal Type

Only one boolean value is allowed.

```ts
let isAdmin: true = true;

isAdmin = true;  // ✅
isAdmin = false; // ❌ Error
```

or

```ts
let isGuest: false = false;
```

### Use Cases

Rarely used, but helpful when a value **must always be `true` or always be `false`**.

---

# Interview Summary

| Literal Type    | Example             | Use Case             |
| --------------- | ------------------- | -------------------- |
| String Literal  | `"admin" \| "user"` | Fixed string values  |
| Numeric Literal | `1 \| 2 \| 3`       | Fixed numeric values |
| Boolean Literal | `true` or `false`   | Fixed boolean value  |

---

## Interview Answer

**What are Literal Types?**

> **Literal Types restrict a variable to one or more exact values instead of allowing any value of that type. They can be string, numeric, or boolean literals.**

### Examples

```ts
type Role = "admin" | "user"; // String Literal
```

```ts
type Rating = 1 | 2 | 3 | 4 | 5; // Numeric Literal
```

```ts
type IsVerified = true; // Boolean Literal
```

### Easy Rule

* Fixed **text** → **String Literal**
* Fixed **numbers** → **Numeric Literal**
* Fixed **true/false** → **Boolean Literal**

How to Decide When to Use?

Ask yourself:

"Can this variable have only a few predefined values?"

✅ Yes → Use Literal Types
❌ No → Use string, number, etc.
 

*NOTE: 
 The problem is this line:

```ts
return obj.name, obj.gender;
```

The **comma operator (`,`)** returns **only the last value**, so this is equivalent to:

```ts
return obj.gender;
```

---

## ✅ Return an object (Recommended)

```ts
interface User {
  name: string;
  gender?: string;
}

function getUser(obj: User) {
  return {
    name: obj.name,
    gender: obj.gender,
  };
}

console.log(getUser({ name: "karan", gender: "male" }));
```

**Output**

```text
{
  name: "karan",
  gender: "male"
}
```

---

## ✅ Return an array

```ts
function getUser(obj: User) {
  return [obj.name, obj.gender];
}

console.log(getUser({ name: "karan", gender: "male" }));
```

**Output**

```text
["karan", "male"]
```

---

## ✅ Return a formatted string

```ts
function getUser(obj: User) {
  return `${obj.name} ${obj.gender}`;
}

console.log(getUser({ name: "karan", gender: "male" }));
```

**Output**

```text
karan male
```

---

### Interview Tip

If you want to return **multiple values** from a function, use:

* ✅ **Object** (most common)
* ✅ **Array**
* ❌ **Not** `return a, b`

The comma operator does **not** return both values—it only returns the **last expression**.

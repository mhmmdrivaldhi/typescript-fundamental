# TypeScript Basic Learning

This repository contains basic implementations of **TypeScript concepts** that I have learned, including **type annotations, array typing, object typing, functions, and interface inheritance**.

The goal of this repository is to understand how TypeScript provides **type safety** for JavaScript, making code more **structured, reliable, and maintainable**.

---

# 📚 Learning Topics

## 1. Variable Type Annotation

TypeScript allows developers to explicitly define the data type of a variable.

```ts
let myName: string = "Muhammad Rivaldhi"
let username: number = 10072004

console.log({myName});
console.log({username});
```

Example output:

```
{ myName: 'Muhammad Rivaldhi' }
{ username: 10072004 }
```

---

## 2. Array Type Annotation

Defining a type for arrays ensures that each element inside the array follows the specified type.

```ts
let myHobbies: string[] = ["Coding", "Gaming", "Traveling"]
console.log({myHobbies});
```

---

## 3. Union Types in Arrays

TypeScript allows arrays to contain multiple types using **Union Types**.

```ts
let mySkills: (string | number)[] = ["Programming", "Design", 5]
console.log({mySkills});
```

This means the array can contain **string or number values**.

---

## 4. Custom Object Type

Custom object types can be defined using the `type` keyword.

```ts
type Person = {
    name: string,
    age: number,
    hobbies?: string[]
}
```

Example implementation:

```ts
let person: Person = {
    name: "Muhammad Rivaldhi",
    age: 20,
    hobbies: ["Coding", "Training", "Traveling"]
}

console.log({person});
```

The `hobbies` property is **optional** because it uses `?`.

---

## 5. Function Declaration

Basic function declaration in TypeScript works similarly to JavaScript.

```ts
function create() {
    return "Successfully created!"
}

console.log(create());
```

---

## 6. Arrow Function with Return Type

TypeScript allows defining the return type of a function.

```ts
const createArrow = (): string => {
    return "Successfully created with arrow function!"
}

console.log(createArrow());
```

---

## 7. Function with Parameter Types

Function parameters can be typed to ensure safer and predictable inputs.

```ts
function createWithParams(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

const result = createWithParams("Muhammad Rivaldhi", 20);
console.log({result});
```

---

## 8. Interfaces in TypeScript

Interfaces are used to define the structure of complex objects.

```ts
interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    speed: number;
}
```

---

## 9. Interface Inheritance

Interfaces can extend other interfaces.

```ts
interface IProcessorIntel extends IProcessor {
    cores: number;
}

interface IProcessorAMD extends IProcessor {
    threads: number;
}
```

---

## 10. Interface Implementation in Functions

### AMD Processor

```ts
function amdProcessor(processor: IProcessorAMD): string {
    return (`Processor created: ${processor.brand} ${processor.baseModel} ${processor.modelName} with speed ${processor.speed} GHz and ${processor.threads} threads.`);
}

const processorAMD: IProcessorAMD = {
    brand: "AMD",
    baseModel: "Ryzen 5",
    modelName: "TUF Gaming A15 FX506FX",
    speed: 3.8,
    threads: 16
};

const processorAMDResult = amdProcessor(processorAMD);
console.log({processorAMDResult});
```

---

### Intel Processor

```ts
function intelProcessor(processor: IProcessorIntel): string {
    return (`Processor created: ${processor.brand} ${processor.baseModel} ${processor.modelName} with speed ${processor.speed} GHz and ${processor.cores} cores.`);
}

const processorIntel: IProcessorIntel = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "12600K",
    speed: 3.7,
    cores: 6
};

const processorIntelResult = intelProcessor(processorIntel);
console.log({processorIntelResult});
```

---

# 🚀 How to Run This Project

### 1. Install TypeScript

```bash
npm install -g typescript
```

### 2. Compile TypeScript

```bash
tsc
```

### 3. Run the compiled JavaScript file

```bash
node dist/index.js
```

---

# 🎯 Learning Objectives

Through this repository, I learned about:

- Type Annotations in TypeScript
- Array Typing
- Union Types
- Custom Object Types
- Function Typing
- Interfaces
- Interface Inheritance
- Type Safety in application development

---

# 🧰 Technologies Used

- TypeScript
- Node.js

---

# 👨‍💻 Author

**Muhammad Rivaldhi**

An aspiring **Fullstack Developer** currently focusing on learning:

- TypeScript
- Backend Development
- Web Application Architecture
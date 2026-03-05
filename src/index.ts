// initialization variable with type annotation
let myName: string = "Muhammad Rivaldhi"
let username: number = 10072004

console.log({myName});
console.log({username});

// initialization variable with array type annotation
let myHobbies: string[] = ["Coding", "Gaming", "Traveling"]
console.log({myHobbies});

// initialization variable with array type annotation with multiple types
let mySkills: (string | number)[] = ["Programming", "Design", 5]
console.log({mySkills});

// initialization variable with object custom type annotation
type Person = {
    name: string,
    age: number,
    hobbies?: string[]
}

let person: Person = {
    name: "Muhammad Rivaldhi",
    age: 20,
    hobbies: ["Coding", "Training", "Traveling"]
}
console.log({person});

// Function Declaration
function create() {
    return "Successfullty created!"
}

console.log(create());

// Function Declaration with arrow function
const createArrow = (): string => {
    return "Successfully created with arrow function!"
}
console.log(createArrow());

// function declaration with parameters and return value annotation
function createWithParams(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

const result = createWithParams("Muhammad Rivaldhi", 20);
console.log({result});


// Initialization variable with custome interface type strict annotation
interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    speed: number;
}

interface IProcessorIntel extends IProcessor {
    cores: number;
}

interface IProcessorAMD extends IProcessor {
    threads: number;
}

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

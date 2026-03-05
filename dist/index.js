"use strict";
// // initialization variable with type annotation
// let myName: string = "Muhammad Rivaldhi"
// let username: number = 10072004
Object.defineProperty(exports, "__esModule", { value: true });
function amdProcessor(processor) {
    return (`Processor created: ${processor.brand} ${processor.baseModel} ${processor.modelName} with speed ${processor.speed} GHz and ${processor.threads} threads.`);
}
const processorAMD = {
    brand: "AMD",
    baseModel: "Ryzen 5",
    modelName: "TUF Gaming A15 FX506FX",
    speed: 3.8,
    threads: 16
};
const processorAMDResult = amdProcessor(processorAMD);
console.log({ processorAMDResult });
function intelProcessor(processor) {
    return (`Processor created: ${processor.brand} ${processor.baseModel} ${processor.modelName} with speed ${processor.speed} GHz and ${processor.cores} cores.`);
}
const processorIntel = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "12600K",
    speed: 3.7,
    cores: 6
};
const processorIntelResult = intelProcessor(processorIntel);
console.log({ processorIntelResult });
//# sourceMappingURL=index.js.map
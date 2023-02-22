let markDataFirstWeight = 78;
let markDataFirstHeight = 1.69;
let JonhDataFirstWeight = 92;
let jonhDataFirstHeight = 1.95;

let markDataTwoWeight = 95;
let markDataTowheight = 1.88;
let jonhDataTwoWeight = 85;
let jonhDataTwoHeight = 1.76;

let markDataFirstBMI = 78 / (1.69 ** 2);
let jonhDataFirstBMI = 92 / (1.95 * 1.95);

let markDataTwoBMI = 95 / (1.88 ** 2);
let jonhDataTwoBMI = 85 / (1.76 * 1.76);

let markDataFirstHigherBMI = markDataFirstBMI > jonhDataFirstBMI;
let markDataTwoHigherBMI = markDataTwoBMI > jonhDataTwoBMI;

console.log(`Dữ liệu kiểm tra 1: mark BMI > jonh BMI : ${markDataFirstHigherBMI}`);
console.log(`Dữ liệu kiểm tra 2: mark BMI > jonh BMI : ${markDataTwoHigherBMI}`);
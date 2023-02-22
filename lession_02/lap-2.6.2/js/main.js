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

console.log("Dữ  liệu kiểm tra 1: ");
if(markDataFirstHigherBMI)  {
    console.log(`Mark's BMI ${markDataFirstBMI} is higher than John's ${jonhDataFirstBMI}! \n\n\n`);

} else {
    console.log(`John's BMI ${jonhDataFirstBMI} is higher than Mark's  ${markDataFirstBMI}! \n\n\n`);
}

console.log("Dữ  liệu kiểm tra 2: ");
if(markDataTwoHigherBMI)  {
    console.log(`Mark's BMI ${markDataTwoBMI} is higher than John's ${jonhDataTwoBMI}! \n\n\n`);

} else {
    console.log(`John's BMI ${jonhDataTwoBMI} is higher than Mark's  ${markDataTwoBMI}! \n\n\n`);
}
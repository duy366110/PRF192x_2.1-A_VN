"use strict";
/**
 * 1)
 * Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất.
 * Hàm này nhận hai đối số là 'country' và 'population', và trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
 * 
 * 2)
 * Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
 * 
 * 3)
 * Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
 */
let worldPopulation = 7900;
let population = 0;
let country = "";

let percentageOfWorld1 = (population) => {
    return ((population / worldPopulation) * 100).toFixed(1);
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

// DECLARATION FUNCTION
country = "Trung Quốc";
population = 99.6;
console.log(describePopulation(country, population));


country = "Việt Nam";
population = 99.6;
console.log(describePopulation(country, population));


country = "Campodia";
population = 17.3;
console.log(describePopulation(country, population));
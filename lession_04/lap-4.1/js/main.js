"use strict";
/**
 * 1)
 * Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. Dựa vào input này, hàm trả về string với định dạng như sau:
 * 'Finland has 6 million people and its capital city is Helsinki'.
 * 
 * 2)
 * Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau. Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.
 */

let country = "";
let population = "";
let capitalCity = "";

function describeCountry(country, population, capitalcity) {
    return `${country} has ${population} million people and its capital city is ${capitalcity} \n\n\n`;
}

country = "Việt Nam";
population = '99,653,399 triệu dân';
capitalCity = "Hà Nội";
console.log(describeCountry(country, population, capitalCity));

country = "Campodia";
population = '17,330,717 triệu dân';
capitalCity = "Phnom Penh";
console.log(describeCountry(country, population, capitalCity));

country = "Laos";
population = '7,554,702 triệu dân';
capitalCity = "Vientiane";
console.log(describeCountry(country, population, capitalCity));
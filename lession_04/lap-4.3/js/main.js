"use strict";
/**
 * 1)
 * Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho.
 * Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
 * 
 * 2)
 * Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
 * 
 * 3)
 * Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
 */
let worldPopulation = 7900;
let populationChina = 1441;
let populationVietNam = 99;
let populationCambdia = 17;

let percentageOfWorld1 = (population) => {
    return `Chiếm ${((population / worldPopulation) * 100).toFixed(1)}% dân số thế giới`;
}

let percentageOfWorld2 = (population) => {
    return `Chiếm ${((population / worldPopulation) * 100).toFixed(1)}% dân số thế giới`;
}

// DECLARATION FUNCTION
console.log(percentageOfWorld1(populationChina));
console.log(percentageOfWorld1(populationVietNam));
console.log(percentageOfWorld1(populationCambdia));
console.log(`\n\n\n`);

// EXPRESSION FUNCTION
console.log(percentageOfWorld2(populationChina));
console.log(percentageOfWorld2(populationVietNam));
console.log(percentageOfWorld2(populationCambdia));
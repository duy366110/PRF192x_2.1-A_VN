"use strict";
/**
 * 1)
 * Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
 * 
 * 2)
 * In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
 * 
 * 3)
 * Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó.
 * Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.
 * 
 */

let percentages = [];
let populations = [1441, 99.3, 17.3, 7.5];

let percentageOfWorld1 = (population) => {
    return ((population / worldPopulation) * 100).toFixed(1);
}

if(populations.length === 4) {
    console.log(`${populations} - ${populations.length === 4} đã có dân số của 4 nước`);

} else {
    console.log(`${populations} - ${populations.length === 4} chưa có dân số của 4 nước`);

}

populations.forEach(e => {
    percentages.push(percentageOfWorld1(e));
})

console.log(`Phần trăm dân số của các quóc gia (Trung Quốc, Việt Nam, Cambodia, Laos) so với dân số thế giới - ${percentages}`);
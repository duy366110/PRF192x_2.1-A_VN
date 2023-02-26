/**
 * Hãy lấy lại array 'populations' từ bài lab trước.
 * 2.Sử. dụng vòng lặp for để tạo array 'percentages2' chứa phần trăm dân số thế giới cho 4 giá trị population. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
 * 3.Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' mà chúng ta đã tạo theo cách thủ công ở lab trước,
 * để xem giải pháp này tốt hơn như thế nào.
 */

let worldPopulation = 7900;
let populations = [1441, 99.6, 17.3, 7.5];
let percentages2 = [];


function percentageOfWorld1(population) {
    return ((population / worldPopulation) * 100).toFixed(1);
}

populations.forEach((e) => {
    percentages2.push(percentageOfWorld1(e));
})

console.log(populations);
console.log(percentages2);


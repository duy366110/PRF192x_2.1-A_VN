/**
 * Hãy cải thiện thêm tip calculator của Steven, lần này sử dụng các vòng lặp!
 * 1. Nhiệm vụ của bạn:
 *  Tạo array 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra.
 *  Tạo các array rỗng cho 'tips' và 'totals'.
 *  Sử dụng hàm 'calcTip' mà chúng ta đã viết trước đó (không cần lặp lại) để tính các giá trị tips và totals (hóa đơn + tiền boa) cho mỗi giá trị bill trong bills array.
 * Sử dụng vòng lặp for để thực hiện 10 phép tính!.
 * 
 * 2. Dữ liệu kiểm tra:
 *  22, 295, 176, 440, 37, 105, 10, 1100, 86 và 52
 *  Gợi ý: Gọi ‘calcTip‘ trong vòng lặp và dùng phương thức push để thêm giá trị cho các array tips và totals.
 *  Bonus: Viết hàm 'calcAverage' nhận array 'arr' làm đối số. Hàm này tính trung bình tất cả các số đã cho trong array.
 *  Đây là một thử thách khó (chúng ta chưa từng thực hiện điều này trước đây)! Dưới đây là hướng dẫn thực hiện:
 *  Trước tiên, bạn cần cộng tất cả các giá trị trong array. Để thực hiện phép cộng, tạo biến 'sum' bắt đầu từ 0. Sau đó lặp qua array,
 *  sử dụng vòng lặp for. Ở mỗi lần lặp, cộng giá trị hiện tại vào biến 'sum'. Như vậy, ở cuối vòng lặp, bạn sẽ cộng được tất cả các giá trị với nhau.
 *  Để tính trung bình, chia tổng mà bạn vừa tính trước đó cho độ dài của array (vì đó là số phần tử).
 *  Gọi hàm với array 'totals'.
 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(val) {
    return (val >= 50 && val <= 300)? (val * 0.15) : (val * 0.2);
}

bills.forEach(e => {
    let tip = calcTip(e);
    tips.push(tip);
    totals.push((e + tip));
})

console.log(`Tips: [${tips}]`);
console.log(`Totals bill and tip: [${totals}]`);
"use strict";
/**
 * Steve vẫn đang xây dựng tip calculator, sử dụng quy tắc tương tự như trước: Tip 15% hóa đơn nếu giá trị hóa đơn trong khoảng 50-300, và với giá trị khác thì tip 20%.
 * 
    1. Nhiệm vụ của bạn:

        + Viết hàm 'calcTip' nhận giá trị hóa đơn bất kỳ làm đầu vào và trả về tiền tip tương ứng,
        tính toán theo các quy tắc ở trên (bạn có thể xem lại code từ thử thách tip calculator đầu tiên nếu cần).
        Sử dụng loại hàm mà bạn thích nhất. Kiểm tra hàm sử dụng giá trị hóa đơn là 100.

        + Giờ hãy dùng array. Hãy tạo array 'bills' có chứa dữ liệu kiểm tra bên dưới.
        + Tạo array 'tips' có chứa giá trị tiền tip cho từng hóa đơn, tính từ hàm mà bạn đã tạo trước đó.
        + Bonus: Tạo array 'total' có chứa tổng giá trị, tức là bill+tip.
    2. Dữ liệu kiểm tra:

        + 125, 555 và 44.
        + Gợi ý: Hãy nhớ rằng array cần một giá trị ở mỗi vị trí, giá trị đó có thể là giá trị trả về của hàm!
        Do đó bạn có thể gọi hàm như giá trị array (trước tiên đừng lưu giá trị tip trong các biến riêng biệt, mà trong array mới).
 */

let bills = [125, 555, 44];
let tips = [];
let totals = [];

function calcBillPercent(percent) {
    return (percent / 100);
}

function calcTip(bill) {
    return (bill >= 50 && bill <= 300)?  bill * calcBillPercent(15) : bill * calcBillPercent(20);
}

bills.forEach((e, index) => {
    let tip = calcTip(e);
    tips.push(tip);
    totals.push(e + tip);
})



console.log(tips);
console.log(totals);
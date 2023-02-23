/**
 * Nếu dân số của đất nước lớn hơn 33 triệu người, sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'.
 * Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!
 * Sau khi kiểm tra kết quả, hãy tạm thay đổi dân số thành 13 rồi thành 130. Hãy xem xét các kết quả khác nhau, rồi đặt dân số về lại ban đầu.
 */

let population = 33;

let result = population > 33? "Portugal's population is above average" : "Portugal's population is below average";
console.log(result);
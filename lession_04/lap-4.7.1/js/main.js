"use strict";
/**
 * Yêu cầu chung: Quay trở lại với hai đội thể dục dụng cụ: Dolphins và Koalas! Có một quy tắc mới cho môn thể dục này, có cơ chế khác hẳn.
 * Mỗi đội thi đấu 3 lần, sau đó tính trung bình 3 lượt điểm số (điểm trung bình mỗi đội).
 * Một đội sẽ giành chiến thắng chỉ khi có số điểm trung bình ít nhất là gấp đôi so với điểm của đội còn lại.
 * Nếu không, sẽ không có đội nào thắng cả!
 * 
 * 1)
    1. Nhiệm vụ của bạn:
        + Tạo hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
        + Sử dụng hàm để tính trung bình của cả hai đội.
        + Tạo hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgDolphins'),
        sau đó in đội thắng ra console cùng với số điểm giành chiến thắng theo luật trên. Ví dụ: "Koalas win (30 vs. 13)".
        + Dùng hàm 'checkWinner' để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2.
        + Lần này hãy bỏ qua việc hòa.

    2. Dữ liệu kiểm tra:
        Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
        Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
 */

function calcAverage(value_01, value_02, value_03) { 
    return ((value_01 + value_02 + value_03) / 3);
}

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    } else if(avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

    } else {
        console.log("No team win ...");
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
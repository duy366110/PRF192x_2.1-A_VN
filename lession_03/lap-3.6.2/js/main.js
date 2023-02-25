'use strict';
/**
 * Steven muốn tạo một tip calculator (công cụ tính tiền tip) đơn giản cho những khi anh ta muốn ăn ở nhà hàng.
 * Ở đất nước của anh ta, người ta thường tip 15% nếu giá trị hóa đơn nằm trong khoảng 50-300. Với những giá trị khác, tip thường là 20%.

   1. Nhiệm vụ của bạn:

   Tính tip dựa theo giá trị hóa đơn. Tạo biến 'tip' cho điều này.
   Không dùng câu lệnh if/else (Để dễ hơn, bạn có thể bắt đầu với lệnh if/else sau đó chuyển đổi nó thành toán tử ba ngôi!)
   In string ra console có chứa giá trị hóa đơn (bill),
   tiền tip và giá trị cuối cùng (bill + tip). Ví dụ: “The bill was 275, the tip was 41.25, and the total value 316.25”

   2. Dữ liệu kiểm tra:

   Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430

   3. Gợi ý:

   Tính 20% của giá trị, nhân nó với 20/100 = 0.2
   Giá trị X nằm trong khoảng 50 và 300, nếu nó >= 50 && <= 300
 */

   let bill = 275;
   let tip = (bill >= 50 && bill <= 300)? (bill * (15/100)) : (bill * (20/100));

   console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


/**
 * 1)
 * Khai báo biến 'numNeighbours' dựa trên prompt input sau: prompt('How many neighbor countries does your country have?').
 * Bạn có thể tìm hiểu cách sử dụng hàm prompt để lấy dữ liệu từ người dùng ở link sau.
 */
   let numNeighbours = prompt("How many neighbor countries does your country have?");
   // numNeighbours = numNeighbours !== null? numNeighbours : 0;

/**
 * 2)
 * Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
 * 3)
 * Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
 * 4)
 *  Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
 */
   if(numNeighbours == 1) {
      console.log('Only 1 border!');

   } else if(numNeighbours > 1) {
      console.log('More than 1 border');

   } else {
      console.log("No borders");
   }

/**
 * 5)
 * Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
 */
   if(numNeighbours != 1 || 0) console.log('numNeighbours là 0 hoặc 1');

/**
 * 6)
 * Thay == thành ===, và kiểm tra lại code với các giá trị 'numNeighbours' tương tự. Điều gì sẽ xảy ra khi numNeighbours = 1? Tại sao lại như vậy?
 * Điều xảy ra ở đây: khối lệnh if/else sẽ rơi vào else cuối cùng khi nhập giá trị là 1
 * Nguyên nhân: do sử dụng === thay vì == điều nãy dẫn đến biểu thức so sánh không ép kiểu nên kết quả so sánh lúc này là false.
 * 
 * 7)
 * Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.
 * Điều xảy ra: ở đây khối mã đi vào câu lệnh if đấu tiên
 */

if(numNeighbours === 1) {
   console.log('Only 1 border!');

} else if(numNeighbours > 1) {
   console.log('More than 1 border');

} else {
   console.log("No borders");
}

/**
 * 8)
 * Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.
 * Lý do: chúng ta nên sử dụng === vì ngoài viecj so sánh về mặt giá trị của value mà === còn so sánh luôn cả về kiểu dự liệu đãm bảo giá trị của hai value luôn đồng nhất
 * về mặt dữ liệu.
 */
/**
 * Có hai đội thể dục dụng cụ là Dolphins và Koalas. Họ thi đấu với nhau 3 lần. Đội nào có điểm trung bình cao nhất sẽ chiến thắng!

   1. Nhiệm vụ của bạn:

   Tính điểm cho từng đội, sử dụng dữ liệu kiểm tra bên dưới
   So sánh điểm trung bình của hai đội để tìm ra đội chiến thắng và in ra console.
      Đừng quên là có thể hòa, nên hãy kiểm tra điều đó (hòa tức là họ có điểm trung bình giống nhau), nếu hòa bạn hãy in ra màn hình "Both win the trophy!".

   Bonus 1: Chúng ta được thêm một quy tắc như sau: số điểm tối thiểu là 100 điểm .
      Theo quy tắc này, một đội sẽ giành chiến thắng chỉ khi họ có điểm trung bình cao hơn đội còn lại, và đồng thời có ít nhất 100 điểm.
      Gợi ý: Sử dụng toán tử logic để kiểm tra điểm số tối thiểu cũng như các else-if block! 

   Bonus 2: Điểm số tối thiểu cũng áp dụng cho việc hòa trận! Trường hợp hòa nhau chỉ xảy ra khi cả hai đội có số điểm giống nhau mà phải lớn hơn hoặc bằng 100 điểm.
      Nếu không thì không có đội nào giành chiến thắng cả.

   2. Dữ liệu kiểm tra:

   Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
   Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
   Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm
 */

   // KIỂM TRA DỮ LIỆU 01
   let scoreDolphins = (96 + 108 + 89) / 3;
   let scoreKoalas = (88 + 91 + 110) / 3;
   console.log(`Dữ liệu 1: Dolphins được 96, 108 và 89 điểm - điểm trung bình ${scoreDolphins}. Koalas được 88, 91 và 110 điểm - điểm trung bình ${scoreKoalas}`);
   if((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) {
      console.log("Dolphins win the trophy!");

   } else if((scoreDolphins < scoreKoalas) && scoreKoalas >= 100) {
      console.log("Koalas win the trophy!");

   } else if((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100 && scoreKoalas >= 100)) {
      console.log("Both win the trophy!");

   } else {
      console.log("No one wins the trophy!");
   }
   
   console.log("\n\n\n");

   // KIỂM TRA DỮ LIỆU 02
   scoreDolphins = (97 + 112 + 101) / 3;
   scoreKoalas = (109 + 95 + 123) / 3;
   console.log(`Dữ liệu 2: Dolphins được 96, 108 và 89 điểm - điểm trung bình ${scoreDolphins}. Koalas được 88, 91 và 110 điểm - điểm trung bình ${scoreKoalas}`);
   if((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) {
      console.log("Dolphins win the trophy!");

   } else if((scoreDolphins < scoreKoalas) && scoreKoalas >= 100) {
      console.log("Koalas win the trophy!");

   } else if((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100 && scoreKoalas >= 100)) {
      console.log("Both win the trophy!");

   } else {
      console.log("No one wins the trophy!");
   }

   console.log("\n\n\n");

   // KIỂM TRA DỮ LIỆU 03
   scoreDolphins = (97 + 112 + 101) / 3;
   scoreKoalas = (109 + 95 + 106) / 3;
   console.log(`Dữ liệu 3: Dolphins được 96, 108 và 89 điểm - điểm trung bình ${scoreDolphins}. Koalas được 88, 91 và 110 điểm - điểm trung bình ${scoreKoalas}`);
   if((scoreDolphins > scoreKoalas) && scoreDolphins >= 100) {
      console.log("Dolphins win the trophy!");

   } else if((scoreDolphins < scoreKoalas) && scoreKoalas >= 100) {
      console.log("Koalas win the trophy!");

   } else if((scoreDolphins === scoreKoalas) && (scoreDolphins >= 100 && scoreKoalas >= 100)) {
      console.log("Both win the trophy!");

   } else {
      console.log("No one wins the trophy!");
   }
/**
 * 1)
 * Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.
 * 
 * 2)
 * Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
 * 
 * 3)
 * Bạn cần tạo các biến tương ứng với ngôn ngữ, dân số, có phải đảo quốc không. Giá trị các biến này sẽ được nhập bằng hàm prompt.
 * 
 * 5)
 * Nếu đất nước nhập vào phù hợp, in ra string như sau: 'You should live in Portugal :)'. Ngược lại, hãy in 'Portugal does not meet your criteria :('
 * 
 * 6)
 * Có thể đất nước mà bạn nhập không đáp ứng toàn bộ tiêu chí. Hãy quay trở lại và thay đổi tạm thời một số biến để điều kiện trở nên đúng (trừ khi bạn sống ở Canada).
 */

// let helpSarah = false;
// let languageCriteria = "";
// let populationCriteria = 0;
// let islandCriteria = "";

let helpSarah = true;
let languageCriteria = "English";
let populationCriteria = 50;
let islandCriteria = "đúng";

helpSarah = helpSarah? helpSarah : confirm(`Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh,
dân số ít hơn 50 triệu người và không phải đảo quốc Nếu có thể bạn hãy giúp cô ấy chọn yes đê thực hiện điều này`);

if(helpSarah) {
   if(languageCriteria && populationCriteria && islandCriteria) {
      console.log('Trừ khi bạn sống ở Canada');

   } else {
      languageCriteria = prompt("Ngôn ngữ của quốc gia: ");
      populationCriteria = parseFloat(prompt("Số dân của quốc gia: "));
      islandCriteria = prompt("Quốc gia là quốc gia: đúng hoặc sai");

      if((languageCriteria == "Tiếng anh" || "Tiếng Anh" || "English" || "english") &&
         (populationCriteria <= 50) && (islandCriteria == "Đúng" || "đúng" || "true")) {
         console.log(`You should live in Portugal :)`);

      } else {
         console.log("Portugal does not meet your criteria :(");
      }
   }
}
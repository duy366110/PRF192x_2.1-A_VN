const COUNTRY = "Việt Nam";
const CONTINENT = "Đông Nam Á";
const ISISLAND = true;
const LANGUAGE = "Vietnamese";

let territory = parseFloat("331.212");
let population = parseFloat("99.327.643");

/**
 * 1. Nếu dân số của nước bạn có hơn 33 triệu người, hãy in string sau ra console: '<country>'s population is above average'.
 * Nếu không hãy in ra một string như thế này: '<country>'s population is < 33 - population > million below average'.
 * Ví dụ dân số của Hà Lan là 18 triệu người, bạn sẽ cần in ra "Nederland's population is 15 million below average" (15 là lấy 33 - 18).
 */

if(population > 33) {
    console.log(`${COUNTRY}'s population is above average \n\n\n`);

} else {
    console.log(`${COUNTRY}'s population is ${33 - population} million below average \n\n\n`);
}

/**
 * 2. Sau khi kiểm tra kết quả, thay đổi giá trị biến population tạm thời thành 13, sau đó thành 130. Quan sát các kết quả khác nhau và đặt giá trị trở lại ban đầu.
 */

population = 13; // 2) value test 13 change to 130.

if(population > 33) {
    console.log(`${COUNTRY}'s population is above average \n\n\n`);

} else {
    console.log(`${COUNTRY}'s population is ${33 - population} million below average \n\n\n`);
}
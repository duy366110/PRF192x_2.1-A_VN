const COUNTRY = "Việt Nam";
const CONTINENT = "Đông Nam Á";
const ISISLAND = true;
const LANGUAGE = "Vietnamese";

let territory = parseFloat("331.212");
let population = parseFloat("99.327.643");

let template = `${ISISLAND} - ${population} - ${LANGUAGE}`;
console.log(`Thông tin cơ bản về đất nước tôi đa sống ${template} \n\n\n`);
/**
 * 1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia,
 * vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.
 */
let halfPopulation = population / 2;
console.table(`Số dân của mỗi miền khi được chia làm 2 : ${halfPopulation} \n\n\n`);

/**
 * 2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.
 */
console.table(`Số dân của quốc gia tăng thêm 1 : ${population + 1} \n\n\n`);

/**
 * 3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không?
 * Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?
 */
if(population > 6) {
    console.table(`Dân số nước ta cao hơn dan số Phần Lan (6 triệu dân) : ${population} \n\n\n`);

} else {
    console.table(`Dân số nước ta không cao hơn dân số Phần Lan (6 triệu dân) : ${population} \n\n\n`);
}

/**
 * 4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?
 */

let averagePopulation = population / territory;
if(averagePopulation > 33) {
    console.table(`Dân số nước ta lớn hơn 33 triệu người : ${averagePopulation} \n\n\n`);

} else {
    console.table(`Dân số nước ta nhỏ hơn 33 triệu người : ${averagePopulation} \n\n\n`);
}

/**
 * 5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description',
 * trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'.
 * Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
 */

let description = `<${COUNTRY}> and it's <${population}> million people speal <${LANGUAGE}>`;
console.log(description);

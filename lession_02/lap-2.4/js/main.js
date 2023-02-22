const COUNTRY = "Việt Nam";
const CONTINENT = "Đông Nam Á";
const ISISLAND = true;
const LANGUAGE = "Vietnamese";

let territory = parseFloat("331.212");
let population = parseFloat("99.327.643");

/**
 * 5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description',
 * trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'.
 * Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
 */

let description = `${COUNTRY} and it's ${population} million people speal ${LANGUAGE} \n\n\n`;
console.log(description);

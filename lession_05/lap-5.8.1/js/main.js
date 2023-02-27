/**
 * Hãy quay lại lab 2.6: So sánh chỉ số BMI của Mark và John! Lần này, hãy dùng object để triển khai các phép tính! Nhớ rằng: BMI = mass/[(height)^2)] = mass/(height*height) (mass tính bằng kg và height tính bằng mét)
 * 1. Nhiệm vụ của bạn:
 *  Với mỗi người (Mark Miller và John Smith), hãy tạo một object có các thuộc tính như full name, mass, and height 
 *  Tạo phương thức 'calcBMI' ở mỗi object để tính BMI (phương thức như nhau ở cả hai object). Lưu giá trị BMI vào một thuộc tính và trả về từ phương thức.
 *  In ra console người có BMI cao hơn cùng với tên đầy đủ và BMI tương ứng. Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
 * 
 * 2. Dữ liệu kiểm tra:
 *  Marks nặng 78 kg và cao 1m69. John nặng 92kg và cao 1m95.
 */

function Person(fullName, mass, height) {
    this.BMI = 0;
    this.fullName = fullName;
    this.height = height;
    this.mass = mass;
    this.calcBMI = () => {
        this.BMI = (this.mass / ((height) ** 2));
    }
}

let markMiller = new Person("Mark Miller", 78, 1.69);
let johnSmith = new Person('John Smith', 92, 1.95);

markMiller.calcBMI();
johnSmith.calcBMI();

if(markMiller.BMI > johnSmith.BMI) {
    console.log(`Mark's BMI (${markMiller.BMI}) is higher than John's (${johnSmith.BMI})!`);

} else {
    console.log(`John's BMI (${johnSmith.BMI}) is higher than Mark's (${markMiller.BMI})!`);

}
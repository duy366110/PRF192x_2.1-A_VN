/**
 * 1.Thêm một phương thức có tên là 'describe' vào object 'myCountry'. Phương thức này sẽ in một string ra console với nội dung như sau:
 * "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" nhưng lần này sử dụng từ khóa 'this'.
 * 
 * 2.Gọi phương thức 'describe' 
 * 3.Thêm phương thức 'checkIsland' vào object 'myCountry'. Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'.
 * 'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
 */

let myCountry = {
    country: "Việt Nam",
    capital: "Hà Nội",
    population: 99.3,
    language: "Tiếng Việt",
    neighbours: ['China', 'Cambodia', 'Laos']
}

myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} million ${this.language} people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
}

myCountry.checkIsland = function() {
    this.isIland = (this.neighbours.length === 0)? true : false;
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
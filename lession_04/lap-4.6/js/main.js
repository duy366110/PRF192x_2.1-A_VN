"use strict";
/**
 * 1)
 * Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.
 * 
 * 2)
 * Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
 * 
 * 3)
 * Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
 * 
 * 4)
 * Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
 * 
 * 5)
 * Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours',
 * rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.
 */

let country = "";
let population = "";
let capitalCity = "";

let neighbours = ['China', 'Cambodia', 'Laos'];
console.log('Các nước láng giềng hiện có: ' + neighbours + `\n\n`);

neighbours.push('Utopia');
console.log('Thêm một láng giềng không tưởng: ' + neighbours + `\n\n`);

neighbours.pop();
console.log('Nước láng giềng mới thêm đã bị loại ra: '+ neighbours + `\n\n`);

!neighbours.includes('Germany') ? console.log('Probably not a central European country :D') : null;

neighbours.reduce((acc, e, index, arr) => {
    acc.push(`Đất nước ${e} - vị trí trong danh sách ${index}`);
    if(index === (arr.length  - 1)) {
        console.log(acc);
    }
    return acc;
},[]);
/**
 * 1.Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 * 2.Nếu như các mảng con có nhiều hơn hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi. Ví dụ với dữ liệu như trên sẽ in ra 
 *  Mexico
 *  Sweden
 *  Russia
 * 3. Bạn sẽ cần một vòng lặp bên trong vòng lặp cho điều này. Điều này thực sự hơi phức tạp, vì vậy đừng lo lắng nếu nó quá khó đối với bạn!
 * Bạn sẽ giải quyết được vấn đề này. 
 */

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i <= (listOfNeighbours.length - 1); i++) {
    if(listOfNeighbours[i].length >= 2) {
        for(let j = 0; j <= (listOfNeighbours[i].length - 1); j++) {
            if(j === 0) {
                continue;

            } else {
                console.log(listOfNeighbours[i][j]);
            }
        }
    }
}
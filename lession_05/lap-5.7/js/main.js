/**
 * 1.Với đề bài tương tự Lab 5.5 Lặp trong array, break và continue, nhưng lần này hãy sử dựng vòng lặp while (gọi array 'percentages3').
 * 2.Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?
 */

let percentages3 = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

let per = 0;
while(per <= (percentages3.length - 1)) {
    if(percentages3[per].length >= 2 ) {
        let j = 0;
        while(j <= (percentages3[per].length - 1)) {
            if(j === 0) {
                j++;
                continue;

            } else {
                console.log(percentages3[per][j]);
            }
            j++;
        }
    }
    per++;
}
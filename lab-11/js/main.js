window.onload = function(event) {
    let answer = document.getElementById('answer');
    let result = document.getElementById('result');

    const poll = {
        question: "What is your favourite programming language? ",
        options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
        numberOfVotes: new Array(4).fill(0)
    }

    let template = `What is you favourite programming language? \n`;

    poll.options.forEach((elm) => {
        template += `${elm} \n`;
    })

    template += `(Write option number)`;

    answer.addEventListener('click', function(event) {
        let option = prompt(template);

        if(!isNaN(option) && option) {
            option = Number(option);

            if(option >= 0 && option <= 3) {
                poll.numberOfVotes[option] += 1;

            } else {
                alert('Please enter option 0 - 3');
            }

        } else {
            alert('Please enter number');
        }
    })

    result.addEventListener('click', function(event) {
        console.log('Hien kết quả lựa chọn');
    })
}
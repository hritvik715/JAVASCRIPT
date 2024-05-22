










































const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //GET ANSWER
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));


        console.log(answer);



        //Resgister answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;//short circuiting of AND array







        this.displayResults();
        this.displayResults('string');

    },
    displayResults(type = 'array') {//default toh array hi hai(answers jo hai vo array kay andar hai)
        if (type === 'array') {
            console.log(this.answers);
        }
        else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }

};

// poll.registerNewAnswer();


// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);//error bcz (this) keyword of registerNewAnswer points to (.poll) element
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));//now (this) keyword will point to the poll object



poll.displayResults.call({ answers: [5, 2, 3] });//cretaed a new object inside 
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


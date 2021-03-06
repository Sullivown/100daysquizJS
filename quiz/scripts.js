const quiz = {
    1: {
        image: "/images/001.jpg",
        answer: "jean-claude van damme",
        hint: "Brussels"
    },
    2: {
        image: "/images/002.jpg",
        answer: "scarlett johansson",
        hint: "Widow"
    },
    3: {
        image: "/images/003.jpg",
        answer: "elton john",
        hint: "Goes 'Meow'"
    },
    4: {
        image: "/images/004.jpg",
        answer: "rupaul",
        hint: "Goes 'Meow'"
    },
    5: {
        image: "/images/005.jpg",
        answer: "jennifer hudson",
        hint: "Goes 'Meow'"
    },
    6: {
        image: "/images/006.jpg",
        answer: "tina turner",
        hint: "Goes 'Meow'"
    },
    7: {
        image: "/images/007.jpg",
        answer: "howard",
        hint: "Goes 'Meow'"
    },
    8: {
        image: "/images/008.jpg",
        answer: "gal gadot",
        hint: "Goes 'Meow'"
    },
    9: {
        image: "/images/009.jpg",
        answer: "rod stewart",
        hint: "Goes 'Meow'"
    },
    10: {
        image: "/images/010.jpg",
        answer: "thandie newton",
        hint: "Goes 'Meow'"
    },
    11: {
        image: "/images/011.jpg",
        answer: "miranda hart",
        hint: "Goes 'Meow'"
    },
    12: {
        image: "/images/012.jpg",
        answer: "nelson mandela",
        hint: "Goes 'Meow'"
    },
    13: {
        image: "/images/013.jpg",
        answer: "lizzo",
        hint: "Goes 'Meow'"
    },
    14: {
        image: "/images/014.jpg",
        answer: "romesh ranganathan",
        hint: "Goes 'Meow'"
    },
    15: {
        image: "/images/015.jpg",
        answer: "dwayne johnson",
        hint: "Goes 'Meow'"
    },
    16: {
        image: "/images/016.jpg",
        answer: "carol vorderman",
        hint: "Goes 'Meow'"
    },
    17: {
        image: "/images/017.jpg",
        answer: "hannah fry",
        hint: "Goes 'Meow'"
    },
    18: {
        image: "/images/018.jpg",
        answer: "marjorie lee browne",
        hint: "Goes 'Meow'"
    },
    19: {
        image: "/images/019.jpg",
        answer: "alan turing",
        hint: "Goes 'Meow'"
    },
    20: {
        image: "/images/020.jpg",
        answer: "maryam mirzakhani",
        hint: "Goes 'Meow'"
    },
    21: {
        image: "/images/021.jpg",
        answer: "dara o briain",
        hint: "Goes 'Meow'"
    },
    22: {
        image: "/images/022.jpg",
        answer: "florence nightingale",
        hint: "Goes 'Meow'"
    },
    23: {
        image: "/images/023.jpg",
        answer: "miriam margolyes",
        hint: "Goes 'Meow'"
    },
    24: {
        image: "/images/024.jpg",
        answer: "skin",
        hint: "Goes 'Meow'"
    },
    25: {
        image: "/images/025.jpg",
        answer: "sandi toksvig",
        hint: "Goes 'Meow'"
    },
    26: {
        image: "/images/026.jpg",
        answer: "denzel washington",
        hint: "Goes 'Meow'"
    },
    27: {
        image: "/images/027.jpg",
        answer: "sandra oh",
        hint: "Goes 'Meow'"
    },
    28: {
        image: "/images/028.jpg",
        answer: "sue perkins",
        hint: "Goes 'Meow'"
    },
    29: {
        image: "/images/029.jpg",
        answer: "alan rickman",
        hint: "Goes 'Meow'"
    },
    30: {
        image: "/images/030.jpg",
        answer: "neil patrick harris",
        hint: "Goes 'Meow'"
    },
    31: {
        image: "/images/031.jpg",
        answer: "gok wan",
        hint: "Goes 'Meow'"
    },
    32: {
        image: "/images/032.jpg",
        answer: "alexandria ocasio-cortez",
        hint: "Goes 'Meow'"
    },
    33: {
        image: "/images/033.jpg",
        answer: "robin williams",
        hint: "Goes 'Meow'"
    },
    34: {
        image: "/images/034.jpg",
        answer: "frida kahlo",
        hint: "Goes 'Meow'"
    },
    35: {
        image: "/images/035.jpg",
        answer: "cynthia nixon",
        hint: "Goes 'Meow'"
    }
}


let score = 0;
const numQuestions = Object.keys(quiz).length;

function generate_questions() {

    // generate score area
    document.querySelector('#scorearea').innerHTML = (`Your score is ${score}/${numQuestions}`);

    // generate questions
    for (var i = 1; i <= numQuestions; i++) {

        question = document.createElement('div');
        question.id = i;
        question.innerHTML = (`

            <div class="card question-card" style="width: 18rem;">
                <div class="card-header">
                <h5>Day ${i}</h5>
                </div>
                <img src="${quiz[i].image}" class="card-img-top" alt="Portrait">
                <div class="card-body">
                    <div id="hintbutton${i}" class="d-grid gap-2">
                        <button id="button${i}" class="btn btn-outline-primary" data-question="${i}">Hint</button>
                    </div>
                    <div id="hinttext${i}" class="card-text" style="display: none;">${quiz[i].hint}</div>
                    <div id="input${i}" class="input">
                        <input class="form-control" id="question${i}" type="text" data-question="${i}" placeholder="Guess!">
                    </div>
                </div>
            </div>
        `);

        // add question to page
        document.querySelector('#quizarea').append(question);
    }
}

function check_answer() {

    // get the question number
    questionNum = this.dataset.question;
    
    // convert input to lowercase
    input = document.querySelector(`#question${questionNum}`).value.toLowerCase();

    // check if correct answer given
    if (input == quiz[questionNum].answer) {

        document.querySelector(`#input${questionNum}`).innerHTML = "Correct!";
        document.querySelector(`#input${questionNum}`).classList.add("success");
        score++;
        document.querySelector('#scorearea').innerHTML = (`Your score is ${score}/${numQuestions}`);

    };

    // check for a score of 100
    if (score == 100) {
        alert("winner!");
    };

}

function give_hint() {

    // get the question number and initialize variables
    questionNum = this.dataset.question;
    hintText = document.querySelector(`#hinttext${questionNum}`);
    hintButton = document.querySelector(`#button${questionNum}`)

    if (hintText.style.display == "none") {

        hintText.style.display = "block";
        hintButton.innerHTML = "Hide hint"

    } else {

        hintText.style.display = "none";
        hintButton.innerHTML = "Hint"

    };

}

document.addEventListener('DOMContentLoaded', () => {

    // generate questions
    generate_questions();

    // add event listener to each button
    document.querySelectorAll("button").forEach(function(button) {
        
        button.onclick = give_hint;
        
    });

    // add event listener to each input
    document.querySelectorAll("input").forEach(function(input) {
    
        input.onkeyup = check_answer;
        
    });

});
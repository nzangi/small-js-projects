
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersButtonElement = document.getElementById("answer-buttons");
let shuffledQuestions,currentQuestionIndex;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click' ,() => {
    currentQuestionIndex++;
    setNextQuestion();

})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);


}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click', selectAnswer);
        answersButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answersButtonElement.firstChild){
        answersButtonElement.removeChild(answersButtonElement.firstChild);

    }

}
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answersButtonElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct);
    })

    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }


}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else {
        element.classList.add('wrong');

    }

}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

const questions = [
    {
        question : 'What is 2 + 2?',

        answers: [
            {text:'4' ,correct:true},
            {text:'22' ,correct:false},

        ]
    },

    {
        question : 'What is 4 + 2?',

        answers: [
            {text:'4' ,correct:true},
            {text:'6' ,correct:false},

        ]
    }
    ,
    {
        question : 'Who is the richest man now?',

        answers: [
            {text:'Elon Musk' ,correct:true},
            {text:'Jeff Benzos' ,correct:false},

        ]
    },
    {
        question : 'When did covid 19 occur?',

        answers: [
            {text:'2020' ,correct:false},
            {text:'2019' ,correct:true},
            {text:'2018' ,correct:false},
            {text:'2022' ,correct:false},
        ]
    },

    {
        question : 'What is 8 + 2?',

        answers: [
            {text:'10' ,correct:true},
            {text:'82' ,correct:false},
        ]
    }


]
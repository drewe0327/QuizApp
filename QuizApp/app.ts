function populate(){
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show questions
    var element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;

    //showChoices
    var choices =quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess ("btn" + i, choices[i])
    }

  showProgress();


  }
};


function guess (id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores() {
  let gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score +  "</h2>"; //added
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

let questions = [
  new Question ("How many tentacles does hank have from Finding Dory?", ["9", "7", "8", "4"],"7"),
  new Question ("what name did Mulan use in the Imperial Army?", ["Ling", "Ping", "Pongo", "Bling"],"Ping"),
  new Question ("When was Walt Disney born?", ["1925", "1930", "1910", "1901"],"1901"),
  new Question ("In Kind of whale was Bailey in Finding Dory?", ["Blue", "Grey", "Beluga", "Shark"],"Beluga"),
  new Question ("Who was the first Disney character created?", ["Mickey", "Pluto", "Donald", "Oswald The Lucky Rabbit"],"Oswald The Lucky Rabbit")
];

let quiz = new Quiz(questions);

populate();

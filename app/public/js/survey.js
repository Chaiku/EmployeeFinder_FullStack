$('form').on("submit", function(event) {
    event.preventDefault();
    console.log($(this).serialize() );
}) ;




let answerArray = [];
let surveyAnswers = []

const completeSurvey = function () {
for(i = 0; i < surveyAnswers.length; i++) {
    answerAray.push(question[i].val());
    
}

for ( i = 0; i < answerArray.length; i++) {
    math.abs(answerArray[i] - employeeAnswer[i])
}
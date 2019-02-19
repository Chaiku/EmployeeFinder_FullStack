$(function() {


const submitSurvey = function (event) {
    event.preventDefault();

    const surveyAnswers = [
         $('#question1').val().trim(),
        $('#question2').val().trim(),
        $('#question3').val().trim()
    ];

    // $.ajax({
    //     method: 'POST',
    //     url: '/api/employees',
    //     data: surveyAnswers
    // })

    console.log(surveyAnswers);
    console.log("hello I'm working");
};

$('#submitBtn').on('click', submitSurvey);

});
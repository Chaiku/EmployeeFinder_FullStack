$(function() {


const submitSurvey = function (event) {
    event.preventDefault();

    const surveyAnswers = [
         parseInt($('#question1').val().trim()),
        parseInt($('#question2').val().trim()),
        parseInt($('#question3').val().trim()),
        parseInt($('#question4').val().trim()),
        parseInt($('#question5').val().trim()),
        parseInt($('#question6').val().trim()),
        parseInt($('#question7').val().trim()),
        parseInt($('#question8').val().trim()),
        parseInt($('#question9').val().trim()),
        parseInt($('#question10').val().trim())
    ];
    
    console.log(surveyAnswers);

    surveySum = surveyAnswers.reduce(function(a, b) {return a + b;}, 0);

    console.log(surveySum);
    
    
    $.ajax({
        method: 'GET',
        url: '/api/employees',
    }).then(function(data){
        
        let differenceArray = [];

        for ( i = 0; i < data.length; i++) {
            let employeeSum = data[i].empAns.reduce(function(a,b) {return a + b;},0);
            let totalDiff = Math.abs(employeeSum - surveySum);
            differenceArray.push(totalDiff);
        }

        console.log(differenceArray);
        console.log(Math.min.apply(null, differenceArray));

        let employeeID = Math.min.apply(null, differenceArray);

        for (i = 0; i < differenceArray.length; i++){
            if ( differenceArray[i] === employeeID) {
                $('#matchModalLabel').text(data[i].empName)
                
            }
        }
        
    
      
    });

    



        //log math.ABS of every emp sum against survey sum. take the lowest values of that array and return that. it will need a variable to make it
        //correspond back to an employee.


    //     const differenceArray = [];
    //         for(i = 0; i < 10; i++) {
    //         let diff = Math.abs(answersInt[i]-data[0].empAns[i])
    //         differenceArray.push(diff)
    //     };
    //     console.log(sum);
    //     console.log(differenceArray);


    // console.log(surveyAnswers);
    // console.log("hello I'm working");
};

$('#submitBtn').on('click', submitSurvey);

});
let studentData = [
    {name: 'Bob', id:0, 'scores':[68, 75, 76, 81]},
    {name: 'Alice', id:1, 'scores':[75, 90, 64, 88]},
    {'name': 'Carol', id:2, 'scores':[59, 74, 71, 68]},
    {'name': 'Dan', id:3, 'scores':[64, 58, 53, 62]},
];

let processStudentData = function(data, passThreshold=60, meritThreshold=75){
    data.forEach(function(sdata){
        let av = sdata.scores.reduce(function(prev, current){
            return prev+current;
        },0) / sdata.scores.length;

        if(av > meritThreshold){
            sdata.assessment = 'passed with merit';
        }
        else if(av >= passThreshold){
            sdata.assessment = 'passed';
        }
        else{
            sdata.assessment = 'failed';
        }

        console.log(sdata.name + "'s (id: " + sdata.id +
            ") final assessment is: " +
            sdata.assessment.toUpperCase());
        sdata.average = av;
    });
}

processStudentData(studentData);
// Bob's (id: 0) final assessment is: PASSED
// Alice's (id: 1) final assessment is: PASSED WITH MERIT
// Carol's (id: 2) final assessment is: PASSED
// Dan's (id: 3) final assessment is: FAILED
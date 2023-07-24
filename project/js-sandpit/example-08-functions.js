function processStudentData1(data, passThreshold=60, meritThreshold=75){
  console.log("in processStudentData1");
}

// function expression
let processStudentData2 = function(data, passThreshold=60, meritThreshold=75){
    console.log("in processStudentData2");
}

let processStudentData3 = (data, passThreshold=60, meritThreshold=75) => {console.log("in processStudentData3");}

// Call with undefined argument "data"
processStudentData1()
processStudentData2()
processStudentData3()
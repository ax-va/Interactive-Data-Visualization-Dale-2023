// Python: elif
// JavaScript: else if

switch("value2"){
  case "value1":
    console.log("In switch: value1");
    console.log("In switch: break");
    // execute if expression === value1
    break; // optional end expression
  case "value2":
     console.log("In switch: value2");
  default:
    // if other matches fail
    console.log("In switch: default");
}
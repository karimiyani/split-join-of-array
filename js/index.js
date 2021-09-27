const message = "Hello Wellcom To Advanced Javascript Course";
const split = message.split(" ");
console.log(split);
// (6) ['Hello', 'Wellcom', 'To', 'Advanced', 'Javascript', 'Course']

// 0: "Hello"
// 1: "Wellcom"
// 2: "To"
// 3: "Advanced"
// 4: "Javascript"
// 5: "Course"
// length: 6
// [[Prototype]]: Array(0)
const join = split.join("-");
console.log(join);
// Hello-Wellcom-To-Advanced-Javascript-Course



const message2 = "Hello Wellcom To Advanced React Course";
console.log(message2.split(" ").join("-"));
// Hello-Wellcom-To-Advanced-React-Course

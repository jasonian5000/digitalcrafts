// ternary operator
// const data = iftruthy ? do this : do this if falsy
const admin = "rayleigh";
const username = admin === "joe" ? "teacher" : "ta";

const isTeacher = username === "joe" ? "teacher" : null;
// AND if you want a null return if condition is not met use operator &&
const loggedIn = username === "joe" && "teacher";
// OR if you want a default us the operator ||
const permittedToStay = loggedIn || "child";

// combining 2 arrays
const array1 = ["andrea", "amanda", "jason"];
const array2 = ["west", "rahmin", "ethan"];
// const students = array1.concat(array2)
// spread operator
const students = [...array1, ...array2];
// console.log(students);

// turn a string into a number with a +
const notANumber = "1";
// console.log(typeof +notANumber);

// a for loop for arrays
// students.forEach(element => {
//     console.log(element.toUpperCase())
// });

// change an array AND return a new array with the changes
// if you keep all your logic in one line you don't need {} or a return statement
const upperCaseStudents = students.map((student) => student.toUpperCase());
// console.log(upperCaseStudents);

// .filter look it up
// .reduce look it up

const googleEmployee = {
  name: "Sundar Pichai",
  status: "ceo",
  salary: "1 billion dollars",
  projects: [
    { name: "project x" },
    { name: "google fi" },
    { name: "google maps 2.0" },
  ],
};
const noogleEmployee = {
  name: "Carlos Silva",
  status: "noogler",
  salary: "not 1 billion dollars",
  department: "google cloud",
};
// optional chain ? is attached to objects to tell code to not error if the key is not found
const allGoogleEmployees = [googleEmployee, noogleEmployee];
allGoogleEmployees.forEach((emp) => console.log(emp?.projects ? emp.projects[0] : emp.department));
// console.log(allGoogleEmployees);

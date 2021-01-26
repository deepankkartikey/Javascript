console.log("CALLBACK Functions");
// synchronous - forEach()
// Asynchronous - setTimeout()

// mocked object from server
const students = [
  { name: "Deepank", subject: "Machine Learning" },
  { name: "Tanmay", subject: "Software Engineering" },
];

console.log(students);

function enrollStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log("STUDENTS ENROLLED");
    callback(); // first complete your task, then call callback method - getStudents() in this case
  }, 8000);
}

function getStudents() {
  setTimeout(() => {
    let str = "";
    students.forEach((student) => {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("STUDENTS FETCHED");
  }, 1000);
}

let newStudent = { name: "Rahul", subject: "Solar Electrical Engineering" };
enrollStudent(newStudent, getStudents);

console.log(students);

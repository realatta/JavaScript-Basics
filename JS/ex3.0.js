


let tableBody = document.getElementById("tBody");
let tbody = "";

let students = [
  {
    student: "Ali Khan",
    subject1: "Urdu",
    subject2: "English",
    subject3: "Math",
    subjectOneMarks: 90,
    subjectTwoMarks: 80,
    subjectThreeMarks: 88,
    pass : true
  },
  {
    student: "Bachal",
    subject1: "Urdu",
    subject2: "English",
    subject3: "Math",
    subjectOneMarks: 90,
    subjectTwoMarks: 50,
    subjectThreeMarks: 60,
    pass : true
  },
  {
    student: "Saeed Ahmed",
    subject1: "Urdu",
    subject2: "English",
    subject3: "Math",
    subjectOneMarks: 30,
    subjectTwoMarks: 40,
    subjectThreeMarks: 30,
    pass : false
  }
];

let totalMarks = 0;

for(let i = 0; i < students.length; i++){
  totalMarks = students[i].subjectOneMarks + students[i].subjectTwoMarks + students[i].subjectThreeMarks
    tbody = tbody + "<tr>"+
    "<td>"+students[i].student+"</td>"+
    "<td>"+students[i].subject1+"</td>"+
    "<td>"+students[i].subject2+"</td>"+
    "<td>"+students[i].subject3+"</td>"+
    "<td>"+students[i].subjectOneMarks+"</td>"+
    "<td>"+students[i].subjectTwoMarks+"</td>"+
    "<td>"+students[i].subjectThreeMarks+"</td>"+
    "<td>"+totalMarks+"</td>"+
    "</tr>";

    // totalMarks = totalMarks + students[i].subjectOneMarks + students[i].subjectTwoMarks + students[i].subjectThreeMarks
}
tbody = tbody;

tableBody.innerHTML = tbody;


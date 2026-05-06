let marks = [];

function enterMarks(){

marks = [];

let subjects = document.getElementById("subjects").value;

for(let i = 1; i <= subjects; i++){

let mark = prompt("Enter marks for subject " + i);

marks.push(Number(mark));

}

}

function calculateResult(){

let total = 0;

for(let m of marks){
total += m;
}

let avg = total / marks.length;

let grade = "";
let result = "";

if(avg >= 90) grade = "A";
else if(avg >= 75) grade = "B";
else if(avg >= 60) grade = "C";
else if(avg >= 40) grade = "D";
else grade = "F";

result = avg >= 40 ? "PASS" : "FAIL";

document.getElementById("result").innerHTML =
"Total Marks: " + total + "<br>" +
"Average Marks: " + avg.toFixed(2) + "<br>" +
"Grade: " + grade + "<br>" +
"Result: " + result;

alert("Now enter details for next student");

document.getElementById("name").value = "";
document.getElementById("subjects").value = "";

}
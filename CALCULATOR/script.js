function calculateResult() {
    let n = document.getElementById("subjects").value;
    if (n < 1) return;

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        if (!isNaN(marks)) total += marks;
    }

    let avg = total / n;

    let grade = avg >= 90 ? "A+" :
                avg >= 75 ? "A" :
                avg >= 60 ? "B" :
                avg >= 50 ? "C" : "F";

    let result = avg >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Total: " + total +
        "<br>Average: " + avg.toFixed(2) +
        "<br>Grade: " + grade +
        "<br>Result: " + result;
}
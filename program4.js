function displayStudentResult(StudentName, Number) {

    if (Number >= 90) {
        console.log(StudentName + "Grade A");
    }
    else if (Number >= 70 && Number < 90) {
        console.log("Grade B");
    }
    else if (Number >= 50 && Number < 70) {
        console.log("Grade C");
    }
    else { console.log("Failed"); }

}

displayStudentResult("Bhuvesh", 40)
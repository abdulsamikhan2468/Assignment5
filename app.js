

let subject1=parseInt(prompt("Enter marks of Islamiat:"))
let subject2=parseInt(prompt("Enter marks of Urdu:"))
let subject3=parseInt(prompt("Enter marks of Mathematics:"))

let marks_obtained=subject1+subject2+subject3;

document.write("<h1>Marks Sheet</h1><br><br><br>")
document.write("Total Marks : 300<br>")
document.write("Marks Obtained : "+marks_obtained+"<br>")

let percentage=(marks_obtained/300)*100
document.write("Percentage :"+percentage+"%<br>");

if (percentage>=80){
    document.write("Grade : A-one<br>");
    document.write("Remarks : Excellent.")
}
else if (percentage>70){
    document.write("Grade : A<br>");
    document.write("Remarks : Good.")
}
else if (percentage>=60){
    document.write("Grade : B<br>");
    document.write("Remarks : You need to improve.")
}
else if (percentage<60){
    document.write("Grade : Fail<br>");
    document.write("Remarks : Sorry.")
}





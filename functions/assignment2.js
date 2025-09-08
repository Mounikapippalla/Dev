const students = [
    {
        rollNumber: 2001,
        name: "Ananya Reddy",
        branch: "Computer Science",
        year: 3,
        subjectMarks: [85, 92, 78, 90, 88],
        isFromOtherState: false
    },
    {
        rollNumber: 2002,
        name: "Arjun Kumar",
        branch: "Computer Science",
        year: 2,
        subjectMarks: [78, 85, 82, 79, 91],
        isFromOtherState: true
    },
    {
        rollNumber: 2003,
        name: "Priyanka Sharma",
        branch: "Information Technology",
        year: 4,
        subjectMarks: [95, 89, 93, 87, 92],
        isFromOtherState: true
    },
    {
        rollNumber: 2004,
        name: "Ravi Teja",
        branch: "Computer Science",
        year: 3,
        subjectMarks: [73, 76, 81, 78, 85],
        isFromOtherState: false
    }
];
function makeClassReport(students) {
    
    const studentAverages = students.map(student => {
        const total = student.subjectMarks.reduce((sum, mark) => sum + mark, 0);
        const avg = total / student.subjectMarks.length;
        return { ...student, average: avg };
    });

   
    const totalStudents = students.length;

    
    const classAverageMarks = 
        studentAverages.reduce((sum, s) => sum + s.average, 0) / totalStudents;

    
    const gradeCount = studentAverages.reduce((acc, s) => {
        if (s.average >= 90) acc.A++;
        else if (s.average >= 80) acc.B++;
        else if (s.average >= 70) acc.C++;
        else if (s.average >= 60) acc.D++;
        else acc.F++;
        return acc;
    }, { A: 0, B: 0, C: 0, D: 0, F: 0 });


    const outOfState = studentAverages.filter(s => s.isFromOtherState);
    const outOfStateCount = outOfState.length;
    const outOfStateAverage = outOfStateCount > 0 
        ? outOfState.reduce((sum, s) => sum + s.average, 0) / outOfStateCount: 0;


    return {
        totalStudents,
        classAverageMarks: parseFloat(classAverageMarks.toFixed(1)),
        gradeCount,
        outOfStateStudents: {
            count: outOfStateCount,
            theirAverageMarks: parseFloat(outOfStateAverage.toFixed(1))
        }
    };
}

console.log(makeClassReport(students));
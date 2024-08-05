//2nd task get all students list
import students from "./data.js"; //we can give any name to default file like ==> import Kuchbhi from "./data.js"
export let getAllStudents = () => {
    return students;
};
//3rd task get Online students list
export let getOnsiteStudent = () => {
    const result = students.filter((student) => student.isOnsiteAllowed === true);
    return result;
};
let onSiteStudents = getOnsiteStudent();
// 4th task get entry test passed students list
export let entryTestPassed = () => {
    const passedResult = students.filter((students) => students.entryTest.isPassed === true);
    return passedResult;
};
let passedStudents = entryTestPassed();
// 5th task get student data
export let getStudentData = (rollNumber) => {
    const studentData = students.find((student) => student.rollNumber === rollNumber);
    return studentData;
};
//6th check student is onsite allowed
export let isOnsiteAlloed = (rollNumber) => {
    let founduser = students.find((student) => student.rollNumber === rollNumber && student.isOnsiteAllowed === true);
    if (founduser) {
        return true;
    }
    else {
        return false;
    }
};

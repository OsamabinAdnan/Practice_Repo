//To define types we have to make interface of this array of object

export interface entryTest {
    isPassed: boolean,
    obtainedMarks: number,
    totalMarks: number,
}

export interface Students {
    id:number,
    firstName: string,
    lastName: string,
    rollNumber: number,
    email: string,
    isOnsiteAllowed: boolean,
    entryTest:entryTest
}

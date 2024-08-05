//1st task create students data
//When we have repeated data and we access it multiple times then we used array of objects
import {entryTest, Students} from "./interface.js"

const students: Students[] = [
    {
      id: 1,
      firstName: "Osama",
      lastName: "bin Adnan",
      rollNumber: 2001,
      email: "osama@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 80,
        totalMarks: 100,
      },
    },{
      id: 2,
      firstName: "Talha",
      lastName: "bin Adnan",
      rollNumber: 2002,
      email: "talha@gmail.com",
      isOnsiteAllowed: false,
      entryTest: {
        isPassed: false,
        obtainedMarks: 65,
        totalMarks: 100,
      },
    },{
      id: 3,
      firstName: "Huzafa",
      lastName: "bin Adnan",
      rollNumber: 2003,
      email: "huzafa@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 85,
        totalMarks: 100,
      },
    },{
      id: 4,
      firstName: "Hamdan",
      lastName: "Talha",
      rollNumber: 2004,
      email: "Hamdan@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 90,
        totalMarks: 100,
      },
    },{
      id: 5,
      firstName: "Sufiyan",
      lastName: "Talha",
      rollNumber: 2005,
      email: "Sufiyan@gmail.com",
      isOnsiteAllowed: false,
      entryTest: {
        isPassed: false,
        obtainedMarks: 50,
        totalMarks: 100,
      },
    },{
      id: 6,
      firstName: "Osman",
      lastName: "Talha",
      rollNumber: 2006,
      email: "Osman@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 95,
        totalMarks: 100,
      },
    },{
      id: 7,
      firstName: "Arham",
      lastName: "Osama",
      rollNumber: 2007,
      email: "Arham@gmail.com",
      isOnsiteAllowed: false,
      entryTest: {
        isPassed: false,
        obtainedMarks: 80,
        totalMarks: 100,
      },
    },{
      id: 8,
      firstName: "Adnan",
      lastName: "Ahmed",
      rollNumber: 2008,
      email: "Adnan@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 83,
        totalMarks: 100,
      },
    },{
      id: 9,
      firstName: "Naveed",
      lastName: "ur Rehman",
      rollNumber: 2009,
      email: "Naveed@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 88,
        totalMarks: 100,
      },
    },{
      id: 10,
      firstName: "Hafiz",
      lastName: "Israr",
      rollNumber: 2010,
      email: "Hafiz@gmail.com",
      isOnsiteAllowed: true,
      entryTest: {
        isPassed: true,
        obtainedMarks: 88,
        totalMarks: 100,
      },
    },
  ];

  export default students;


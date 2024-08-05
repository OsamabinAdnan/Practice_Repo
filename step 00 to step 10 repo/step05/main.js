//object has keys and values
//we use it when we want to store data in key value pairs | for well structure data
//Array is unstructure data
//we use it when we want to store data in sequential manner
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let student = {
    name: "Osama",
    stdID: 1234,
    email: "osama@gmail.com"
};
console.log(student.name);
console.log(student["stdID"]);
console.log(student);
let Car = {
    name: "BMW",
    model: "X5",
    year: 2023,
    variant: "SUV"
};
console.log(Car);
console.log(Car.model);
console.log(Car["variant"]);
//Modify object's property
Car.year = 2024;
console.log(Car.year);
console.log(Car);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Type declaration Anonymous Object Types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let Person = {
    name: "Osama",
    ID: 9646,
    MarksObtaine: 90,
    TotalMarks: 100
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object "Type Alias" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// we create custom type for object it it
// anonymous
let Tutor = {
    name: "Zeeshan",
    exp: 10
};
let teacher = {
    name: "Ali Jawad",
    exper: "10 years"
};
let teach = {
    name: "Ahmed",
    exper: "5 years"
};
let teacherType = {
    name: "Ahmed",
    exper: 4
};
let EmpData = [
    {
        EmpName: "Ali",
        EmpId: 5646,
        EmpSalary: 50000
    },
    {
        EmpName: "Ahmed",
        EmpId: 7764,
        EmpSalary: 35000
    }
];
console.log(EmpData);
console.log(EmpData[0]);
console.log(EmpData[1].EmpId);
let circle = {
    diameter: 10,
    radius: 20
};
let sphere = {
    diameter: 15,
    radius: 25
};
circle = sphere;
sphere = circle;
let disk = {
    radius: 10
};
let ball = {
    radius: 10,
    diameter: 15
};
disk = ball; //OK
// ball = disk //Error because all properties of left hand side (LHS) should present in right hand side (RHS)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Stale and Fresh object >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*****
 * Fresh objects are NOT ASSIGNABLE is there are more properties.
 * Stale objects are ASSIGNABLE if there are more properties.
 
 * In TypeScript, "fresh objects" refer to objects created in place, usually as a literal, that TypeScript checks more strictly for excess properties. This means that when you create an object directly and pass it to a variable, TypeScript makes sure that this object only has the properties defined by the expected type and no extra ones.
 
 * The object is assigned to a variable first, making it a "stale" object. TypeScript allows the assignment to other object even though it has an extra property because it's not checking as strictly for excess properties in this case.

In summary, fresh objects are those that TypeScript checks very strictly against the expected type, ensuring they do not have any extra properties beyond what is defined. This helps catch potential errors when objects are created and used directly.
 */
//Fresh object
//Case 01
let myDetail = {
    name: "Osama",
    id: 54654
};
myDetail = {
    name: "Ali",
    id: 5646,
};
//Case 02 ==> assignning a property with improvise name
/*myDetail = {
    name_person: "Ali", //Error, renamed or missing property
    id:4564,
}
*/
//Object literal may only specify known properties, and 'name_person' does not exist in type '{ name: string; id: number; }'
// Case 02 b
let x;
x = {
    id: 4,
    fullname: "ali jawwad",
    age: "35",
    email: "osama@gmail.com"
};
//Case 03
myDetail = {
    name: "Ali",
    id: 5646,
    //age:35 ==> //ERROR excess property
};
//Stale object
//Stale object store in any variable priorly and uses later, 
//TS is flexible in this case and allow extra properties till required properties matched
let myType = { id: 2, name: "Tom" };
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var A; //Note now 'x' can have any name, just that the property should be of type string
var B = { id: 1, fullname: "Zia" };
A = B; // Ok, `fullname` matched by index signature
var myType4 = { id: 2, name: "Tom", age: 22 };
//Case 3
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Nested object >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let myBio = {
    name: "Osama bin Adnan",
    id: 46546,
    age: 35,
    Qualification: {
        Matric: {
            grade: "A-1"
        },
        Inter: {
            grade: "C"
        },
        BSTextile: {
            CGPA: 3.48
        },
        MBA: {
            CGPA: 3.57
        }
    }
};
console.log(myBio);
console.log(myBio.Qualification.MBA);
let customers = [{
        customerName: "Osama bin Adnan",
        product: {
            productName: "Bat",
            productPrice: 100000
        }
    }, {
        customerName: "Ali Jawad",
        product: {
            productName: "Ball",
            productPrice: 25000
        }
    }
];
console.log(customers[1].product.productName);
console.log(customers[0].customerName);
console.log(customers);
let filterCustomer = customers.filter((Banda) => Banda.customerName == "Osama bin Adnan");
console.log(filterCustomer);
let employeeDetail = {
    age: 35,
    id: 5466,
    email: "osama@gmail.com",
    designation: "M2",
    salary: "PKR 55000",
    name: "Osama",
};
export {};

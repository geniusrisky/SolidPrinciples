

// // Exercise 3: Implement Many-to-Many Relationship

// // Design a system where:

// //     A Student can enroll in multiple Courses.
// //     A Course can have multiple Students.
// //     Implement methods to:
// //         Enroll a student in a course.
// //         List all courses a student is enrolled in.
// //         List all students enrolled in a course.

// class Student{

//     constructor(name, email, studentId){
//         this.name = name;
//         this.email = email;
//         this.studentId = studentId;
//         this.students = [];
//     }
//     // getStudentinfo students
//     getAllEnrolledCourses(studentId){

//     }
//     // add student

//     addStudent(student){
//         this.students.push( {
//             studentId: student.studentId,
//             name: student.name,
//             email: student.email
//         });
//     }

//     getAllStudents(){
//         let result= [];
//         this.students.forEach((student)=>{
//              result.push( {
//                 studentId: student.studentId,
//                 name: student.name,
//                 email: student.email
//             })
//         });
//         console.log(result)
//     }
// }

// class Course{

//     constructor(courseName, duration, courseId, instructor){
//         this.courseName = courseName;
//         this.duration = duration;
//         this.courseId = courseId;
//         this.instructor = instructor;;
//         this.courses = [];
//     }

//     // add courses;
//     addCourse(course){
//         this.courses.push(course)

//     }


//     //get all students enrolled for the course;
//         getAllStudentsEnrolledforCourse(courseId, studentId){
//         this.courses.forEach((course, courseId)=>{
//             let result = [];
//             if(course.courseId === courseId){
//                 result.push(course.courseName);
//             }
//         })
//         console.log(result);
//         }

// }

// let course = new Course();
// let student =  new Student();

// let student1 = new Student('akash', 'akshtiwarisky290@gmail.com', 5);
// let student2 =  new Student('chandra', 'chandra290@gmail.com', 6);
// let student3 =  new Student('Ayush', 'chandra290@gmail.com', 7);
// let student4 =  new Student('Neha', 'chandra290@gmail.com', 8);
// let student5 =  new Student('Genius', 'chandra290@gmail.com', 9);
// let student6 =  new Student('khushbu', 'chandra290@gmail.com', 1);

// //adding students;
// student.addStudent(student1);
// student.addStudent(student2);
// student.addStudent(student3);
// student.addStudent(student4);
// student.addStudent(student5);
// student.addStudent(student6);
// //student.addStudent(student1);
// // conosole.log(student)

// student.getAllStudents();



// //add courses

// course.addCourse('maths', '5 months', '123', 'Akash');
// course.addCourse('Physics', '4 months', '128', 'Akash');
// course.addCourse('chemistry', '5 months', '126', 'Akash');
// course.addCourse('nodejs', '5 months', '125', 'Akash');
// course.addCourse('mongoDB', '5 months', '124', 'Akash');




// Student class
class Student {
    constructor(name) {
        this.name = name;
        this.courses = []; // List of courses the student is enrolled in
    }

    enrollInCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
            course.addStudent(this); // Enroll the student in the course
        }
    }

    listCourses() {
        if (this.courses.length === 0) {
            console.log(`${this.name} is not enrolled in any courses.`);
        } else {
            console.log(`${this.name} is enrolled in the following courses:`);
            this.courses.forEach(course => {
                console.log(course.name);
            });
        }
    }
}

// Course class
class Course {
    constructor(name) {
        this.name = name;
        this.students = []; // List of students enrolled in the course
    }

    addStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student);
        }
    }

    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are enrolled in ${this.name}.`);
        } else {
            console.log(`The following students are enrolled in ${this.name}:`);
            this.students.forEach(student => {
                console.log(student.name);
            });
        }
    }
}

// Example usage:

const student1 = new Student("Alice");
const student2 = new Student("Bob");  // Alice is enrolled in Math and Physics

const course1 = new Course("Math");
const course2 = new Course("Physics");

console.log(course1, student1)

// Enroll students in courses
student1.enrollInCourse(course1);
student1.enrollInCourse(course2);

student2.enrollInCourse(course1);

// // List courses for a student
student1.listCourses();  // Alice is enrolled in Math and Physics
student2.listCourses();  // Bob is enrolled in Math

// // List students for a course
course1.listStudents();  // Math has Alice and Bob
course2.listStudents();  // Physics has Alice
student1.listCourses();  // Alice is enrolled in Math and Physics
student2.listCourses();  // Bob is enrolled in Math

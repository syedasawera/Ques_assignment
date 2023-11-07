
/*They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items*/


interface Student {
    name: string;
    age: number;
    grade: string;
  }
  
  const students: Student[] = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
    { name: "Charlie", age: 19, grade: "A+" },
    { name: "David", age: 22, grade: "B+" },
  ];
  
  console.log("List of Students:");
  students.forEach(student => console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`));
  
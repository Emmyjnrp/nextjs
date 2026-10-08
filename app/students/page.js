import React from "react";

const getStudent = async () => {
  const response = await fetch("http://localhost:3000/api/students");
  if (!response.ok) {
    throw new Error("Failed to fetch student data");
  }
  return response.json();
};

export default async function StudentPage() {
  const data = await getStudent();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl my-3">Student Page</h1>
      {data.students.map((student) => (
        <div className="border p-4 mb-4 mx-2" key={student.id}>
          <h2 className="text-xl font-bold">{student.name}</h2>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}

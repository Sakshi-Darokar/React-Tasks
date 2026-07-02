import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const navigate = useNavigate();

  // Input Change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Local Storage se purana data lo
    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    // Duplicate Email Check
    const emailExists = students.some(
      (item) => item.email === student.email
    );

    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    // Naya Student Object
    const newStudent = {
      id: Date.now(),
      ...student,
    };

    // Array me Add karo
    students.push(newStudent);

    // Local Storage me Save karo
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully");

    // Form Reset
    setStudent({
      name: "",
      email: "",
      course: "",
    });

    // Home Page par Redirect
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Save Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
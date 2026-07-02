import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const currentStudent = students.find(
      (student) => student.id === Number(id)
    );

    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmUpdate = window.confirm(
  "Do you want to update this student?"
);

if (!confirmUpdate) return;

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const updatedStudents = students.map((item) =>
      item.id === Number(id) ? student : item
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    alert("Student Updated Successfully");

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
        />

        <button type="submit">
          Update Student
        </button>

      </form>
    </div>
  );
}

export default EditStudent;
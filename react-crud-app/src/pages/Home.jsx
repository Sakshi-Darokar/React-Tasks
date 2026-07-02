import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  // Delete Student
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    setStudents(updatedStudents);
  };

  return (
    <div className="container">
      <h2>Student List</h2>
     
        <input
  className="search-box"
  type="text"
  placeholder="Search Student..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Total Students : {students.length}
      </p>

      {students.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          No Students Found
        </h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students
  .filter((student) => {
    const text = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(text) ||
      student.email.toLowerCase().includes(text) ||
      student.course.toLowerCase().includes(text)
    );
  })
  .map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>

                <td>
                  <Link to={`/edit/${student.id}`}>
                    <button className="edit-btn">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
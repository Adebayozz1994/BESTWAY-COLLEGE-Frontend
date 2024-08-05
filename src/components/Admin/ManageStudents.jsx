// src/components/Admin/ManageStudents.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/admin/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleAddStudent = () => {
    axios.post('http://localhost:3000/admin/students', newStudent)
      .then(response => setStudents([...students, response.data]))
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Students</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="mr-2 p-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          className="mr-2 p-2 border"
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
          className="mr-2 p-2 border"
        />
        <button onClick={handleAddStudent} className="p-2 bg-blue-600 text-white">Add Student</button>
      </div>
      <table className="w-full bg-white shadow-md rounded mb-6">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.email}</td>
              <td className="border p-2">{student.course}</td>
              <td className="border p-2">
                <button className="p-1 bg-red-600 text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageStudents;

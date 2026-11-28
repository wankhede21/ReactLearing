import React, { useState, useEffect } from "react";

import {
    getStudents,
    addStudent,
    deleteStudent
} from "../services/studentService";

function StudentList() {

    const [students, setStudents] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // GET API
    const fetchStudents = async () => {
        try {
            const response = await getStudents();
            setStudents(response.data);
        } catch (error) {
            console.log("Error fetching students", error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // ADD API
    const handleAddStudent = async () => {

        if (!name || !email) {
            alert("Please enter name and email");
            return;
        }

        const newStudent = {
            name: name,
            email: email
        };

        try {
            const response = await addStudent(newStudent);

            setStudents([...students, response.data]);

            setName("");
            setEmail("");

        } catch (error) {
            console.log(error);
        }
    };

    // DELETE API
    const handleDelete = async (id) => {

        try {
            await deleteStudent(id);

            setStudents(
                students.filter((student) => student.id !== id)
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Student Management System</h2>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleAddStudent}>
                Add Student
            </button>

            <hr />

            <h3>Student List</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default StudentList;
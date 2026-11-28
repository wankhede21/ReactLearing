import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET students
export const getStudents = () => {
    return axios.get(API_URL);
};

// ADD student
export const addStudent = (student) => {
    return axios.post(API_URL, student);
};

// UPDATE student
export const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

// DELETE student
export const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
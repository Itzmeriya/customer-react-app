import React, { useState } from "react";
import data from "./data.json"
import"./table.css"

const StudentData = () => {

    const [students, setStudents] = useState(data);
    const [addStudentData, setAddStudentData ] = useState({
        studentId:'',
        studentName:'',
        address:'',
        courseName:'',
    })

    const handleAddStudentChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudentData};
        newStudentData[fieldName] = fieldValue;

        setAddStudentData(newStudentData);

    }

    const handleAddStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            studentId : addStudentData.studentId,
            studentName : addStudentData.studentName,
            address : addStudentData.address,
            courseName : addStudentData.courseName,

            
        };

        const newStudents = [ ...students, newStudent];
        setStudents(newStudents);

    };

    return (
    <div>
        <table className="Table">
            <thead className="Table-header">
                <tr>
                    <th>Student-Id</th>
                    <th>Student-Name</th>
                    <th>Address</th>
                    <th>Course-Name</th>
                </tr>
            </thead>
            <tbody className="Table-body">
                {students.map((student) => (
                    <tr>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.address}</td>
                    <td>{student.courseName}</td>
                    <button>Delete</button>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h2>ADD NEW STUDENT</h2>
        <form onSubmit={handleAddStudentSubmit}>
            <input 
             type="number" 
             name="studentId" 
             required="required" 
             placeholder="Enter the Id"
             onChange={handleAddStudentChange} 
            />
            <input 
             type="text" 
             name="studentName" 
             required="required" 
             placeholder="Enter the Studentname"
             onChange={handleAddStudentChange}  
            />
            <input 
             type="text" 
             name="address" 
             required="required" 
             placeholder="Enter the address"
             onChange={handleAddStudentChange}
             />
             <input 
             type="text" 
             name="courseName" 
             required="required" 
             placeholder="Enter the coursename"
             onChange={handleAddStudentChange} 
            />
            <button type="submit">Add</button>
        </form>
    </div>
    );
};

export default StudentData;
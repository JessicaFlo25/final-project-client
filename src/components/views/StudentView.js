/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <div style={{backgroundColor:"white", paddingTop:"2em", paddingBottom:"2em", marginRight:"10em", marginLeft:"10em"}}>
        <img
          src={student.imageurl || "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/Spongebob-Sandy.png"} 
          style={{ maxWidth: '100%', maxHeight: '100px', borderRadius:'40%', height:'auto' }}
        />

        <p>First Name: {student.firstname}</p>
        <p>Last Name: {student.lastname}</p>
        <p>Email: {student.email}</p>
        <p>GPA (0.0 - 4.0 scale): {student.gpa}</p>
        {/* display campus student attends */}
        {student.campus && (
          <p>Attends:</p>
        )}
        {student.campus && (
          <Link to={`/campus/${student.campus.id}`} style={{ textDecoration: 'none' }}>
            <p><strong>{student.campus.name}</strong></p>
          </Link>
        )}

        {/* student doesnt belong to a campus */}
        {!student.campus && (
          <p>{student.firstname} is not enrolled at a college.</p>
        )}
        <div style={{ marginTop: '1em' }}>
          <Link to={`/editstudent/${student.id}`}>
            <Button style={{color:"white", backgroundColor:"black", marginRight:"0.5em"}}>Edit Student</Button>
          </Link>
          <Button style={{color:"white", backgroundColor:"brown"}} onClick={() => deleteStudent(student.id)}>Delete Student</Button>
        </div>
      </div>
    </div>
  );

};

export default StudentView;
/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, handleDelete, deleteStudent} = props;
  const campus_id = campus.id;
  // Render a single Campus view with list of its students
  return (
    <div>
      <img src = {campus.imageURL} style={{width: '30%', height: 'auto', borderRadius:"30px", margin:'30px'}} alt={campus.name}></img>
      <h1>{campus.name}</h1>
      <h4>{campus.address}</h4>
      <h4>{campus.description}</h4>
      {campus.students.length > 0 ?
        (
        campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>Student: {name}</h2>
              </Link>
              <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}} onClick={() => deleteStudent(student)}>Unenroll Student</button>
            </div>
          );
        })
        ):
        (<h3>No students are enrolled at this campus</h3>)
      }
      <br></br>
      <Link to={{
        pathname: `/newstudent`,
        query: {campus_id}
        }}>
        <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Enroll New Student</button>
      </Link>
      <Link to={{
        pathname: `/students`,
        query: {campus_id}
        }}>
        <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Enroll Existing Student</button>
      </Link>
      <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}} onClick={handleDelete}>Delete Campus</button>
    </div>
  );
};

export default CampusView;
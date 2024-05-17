import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const EnrollExistingStudentView = (props) => {
    const { students, campus_id, enrollStudent } = props;
    //when button is clicked will get student using the id and campys id
    const handleEnrollClick = (studentId, campusId) => {
        enrollStudent(studentId, campusId);
      };
      //case if there are no students and at least a single student
      if (students.length == 0) {
        return (
          <div>
            <h3>No students are available to enroll at this time.</h3>
            <Link to={`/campuses`}>
              <Button style={{color:"white", backgroundColor:"brown", marginRight:"0.4em"}}>Go Back to Campuses</Button>
            </Link>
          </div>
        )  
      }
      if (students.length > 0) {
        //return follows same structure
        return (
          <div>
            <h1>Students:</h1>
      
            {students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                  <div key={student.id}>
                    <Link to={`/student/${student.id}`}>
                      <h2>{name}</h2>
                    </Link>
                    <img
                      src={student.imageurl || "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/Spongebob-Sandy.png"} 
                      style={{ maxWidth: '100%', maxHeight: '100px', borderRadius:'20%', height:'auto', maxWidth:'100%' }}
                    />
                    <br></br>
                    <br></br>
                    <Button style={{ color: 'white', backgroundColor: 'pink' }} onClick={() => handleEnrollClick(student.id, campus_id)}>
                        Enroll Student
                    </Button>
                    <br/>
                    <br/>
                    <hr/>
                  </div>
                );
              }
            )}
            <br/>   
            <br/><br/>
          </div>
        );
      }
};

export default EnrollExistingStudentView;






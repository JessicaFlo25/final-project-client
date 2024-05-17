import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const { student, handleChange, handleSubmit } = props;
  const classes = useStyles();
  return (
    <div>
      <h1>Editing Student Information Center</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Times New Roman, serif', fontSize: '20px', color: '#11153e'}}>
              You are now editing {student.firstname}'s information
            </Typography>
          </div>
          {/* include entries for all labels and include the handlers to save typed input */}
          {/* fname */}
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" defaultValue={student.firstname} required onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            {/* lname */}
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" defaultValue={student.lastname} required onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            {/* email */}
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
            <input type="email" name="email" defaultValue={student.email} required onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            {/* img url */}
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageurl" defaultValue={student.imageurl} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            {/* GPA */}
            <label style={{ color: '#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" step="0.1" min="0" max="4" name="gpa" defaultValue={student.gpa} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            {/* campus id */}
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
            <input type="text" name="campusId" defaultValue={student.campusId} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </form>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default EditStudentView;

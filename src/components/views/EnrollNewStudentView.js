import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    formContainer: {  
      width: '450px',
      backgroundColor: '#b3b3b3', 
      borderRadius: '7px',
      margin: 'auto',
      padding: '25px', 
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      textDecoration: 'none'
    }, 
    customizeAppBar: {
      backgroundColor: '#333', 
      shadows: ['none'],
    },
    formTitle: {
      backgroundColor: '#757575',  
      marginBottom: '15px',
      textAlign: 'center',
      borderRadius: '5px 5px 0px 0px',
      padding: '12px',  
    },
    inputLabel: {
      color: '#333', 
      fontWeight: 'bolder',
    },
    inputField: {
      margin: '10px 0', 
      width: '100%',
      padding: '15px',  
    },
    submitButton: {
      backgroundColor: '#00695c',  
      color: '#fff', 
      marginTop: '30px',  
    }
  }));
  //method above presets some
const EnrollNewStudentView = (props) => {
    const { campus_id, handleChange, handleSubmit } = props;
    const classes = useStyles();
  
    // Render a New Student view with an input form
    return (
      <div>
        <h1>Enroll A New Student</h1>
        <div className={classes.root}>
          <div className={classes.formContainer}>
            <div className={classes.formTitle}>
              <Typography style={{fontWeight: 'bolder', fontFamily: 'Times New Roman, serif', fontSize: '25px', color: '#11153e'}}>
                Add a Student
              </Typography>
            </div>
            {/* fname */}
            <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
              <label style= {{color:'#585b77 ', fontWeight: 'bolder'}}>First Name: </label>
              <input type="text" name="firstname" required onChange ={(e) => handleChange(e)} />
              <br/>
              <br/>
            {/* lname */}
              <label style={{color:'#585b77 ', fontWeight: 'bolder'}}>Last Name: </label>
              <input type="text" name="lastname" required onChange={(e) => handleChange(e)} />
              <br/>
              <br/>
            {/* email */}
              <label style={{ color: '#585b77 ', fontWeight: 'bolder' }}>Email: </label>
              <input type="email" name="email" required onChange={(e) => handleChange(e)} />
              <br/>
              <br/>
              {/* Img URL */}
              <label style={{ color: '#585b77 ', fontWeight: 'bolder' }}>Image URL: </label>
              <input type="text" name="imageurl" onChange={(e) => handleChange(e)} />
              <br/>
              <br/>
              {/* GPA */}
              <label style={{ color: '#585b77 ', fontWeight: 'bolder'}}>GPA range from 0.0-4.0: </label>
              <input type="number" step="0.1" min="0" max="4" name="gpa" onChange={(e) => handleChange(e)} />
              <br/>
              <br/>
            {/* campus id */}
              <label style={{color:'#585b77 ', fontWeight: 'bolder'}}>Campus ID: </label>
              <input type="text" name="campusId" value={campus_id.campus_id} onChange={(e) => handleChange(e)} />
              <br/>
              <br/>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <br/>
              <br/>
            </form>
          </div>
        </div>
      </div>    
    );
  }
  
  export default EnrollNewStudentView;

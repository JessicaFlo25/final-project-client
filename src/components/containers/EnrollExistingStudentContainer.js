import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router-dom";

import { 
  fetchAllStudentsThunk,
  editStudentThunk
} from '../../store/thunks';

import EnrollExistingStudentView from '../views/EnrollExistingStudentView';

class EnrollExistingStudentContainer extends Component {
    componentDidMount(){

    }

    constructor(props){
        super(props);
        this.state = {
          redirect: false, 
          redirectId: null
        };
      }

      enrollEStudent = async (studentid, campusid) => {
        let {student} = this.props; 
        student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: campusid.campusid,
            id: studentid
        };

        let newStudent = await this.props.editStudent(student);
        this.setState({
            redirect: true,
            redirectId: student.campusId
        });
      };

      render() {
        return(
            <div>
                <Header/>
                <EnrollExistingStudentView
                campus_id = {this.props.location.query} 
                students={this.props.allStudents}
                enrollStudent={this.enrollEStudent}      
                />
                {this.state.redirect && (<Redirect to={`/campus/${this.state.redirectId}`} />)}
            </div>
        )
      }
      


}
const mapState = (state) => {
  return {
    allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
  };
};
//acquire and the edit student
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(EnrollExistingStudentContainer));


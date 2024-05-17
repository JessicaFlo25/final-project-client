/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk,deleteStudentThunk, editStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect} from 'react-router-dom'

class StudentContainer extends Component {
  //constructor that holds state
  constructor(props) {
    super(props);
    this.state={
      redirect: false,
    };
  }
  // Get student data from back-end database
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }
  //recieving a student id that will then be used with backend to remove
  //a student from the datatable
  deleteStudent = async(studentId) => {
    await this.props.deleteStudent(studentId);
    this.setState({redirect: true});
  }

  //if redirect is true, will display students
  render() {
    if (this.state.redirect) {
      return <Redirect to="/students" />;
    }
    //if redirect is false, will go to the student view and pass by necesarry props to interact with students
    return (
      <div>
        <Header />
        <StudentView 
        student={this.props.student}
        editStudent={this.props.editStudent}
        deleteStudent={this.delettionStudent}
        unenrollStudent={this.props.unenrollStudent}
        />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
  return {
    student: state.student,  // Get the State object from Reducer "student"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    editStudent: (id) => dispatch(editStudentThunk(student)),
  };
};

// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(StudentContainer);
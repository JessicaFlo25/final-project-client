//will need to get the required student and "update" details bout the student
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import EditStudentView from '../views/EditStudentView';
import { Redirect } from 'react-router-dom';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
    componentDidMount(){
        //gets the student using the id in url
        this.props.fetchStudent(this.props.match.params.id);
      }
    //will hold info that will be updated
    constructor(props) {
        super(props);
        this.state = {
          redirect:false
        };
      }

      //handler that matches input with key and value
      handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        };

        //takes care of new entered info on the form for a student
        handleSubmit = async (event) => {
            event.preventDefault();
            let {student} = this.props; 
        
        student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            id: student.id
        };

        await this.props.editStudent(student);
        this.setState({
            redirect:true
        });
    }
    //display 
    render() {
        const { student } = this.props;

        if (this.state.redirect) {
            return (<Redirect to={`/students`} />)
        }

        return (
            <div>
                <Header />
                <EditStudentView campusId = {this.props.location.query} student={student} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

    const mapState = (state) => {
        return {
            student: state.student,
        };
    };
    //we are editiing student so only chnage is call to editstudent and pass the student
  const mapDispatch = (dispatch) => {
    return {
      fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
      editStudent: (student) => dispatch(editStudentThunk(student)),
    };
  };
  
  export default connect(mapState, mapDispatch)(EditStudentContainer);
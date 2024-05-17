//will need to get the required student and "update" details bout the student
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { Redirect } from 'react-router-dom';


class EditStudentContainer extends Component {
    componentDidMount(){
        //gets the student using the id in url
        this.props.fetchStudent(this.props.match.params.id);
      }
    //will hold info that will be updated
    constructor(props) {
        super(props);
        this.state = {
          redirect:null
        };
      }

      //handler that matches input with key and value
      handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value,
            });
        };

        //takes care of new entered info on the form for a student
        handleSubmit = async (e) => {
            e.preventDefault();
        
        let {student} = this.props; 
        //student entries we will be updating
        student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            id: student.id
        };

        await this.props.editStudent(student);
        this.setState({redirect:true});
    };
    //display 
    render(){
        return(
            <div>
                <Header/>
                <EditStudentView
                student={this.props.student}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}/>
            {this.state.redirect && (<Redirect to={`/students`} />)}
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
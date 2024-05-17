import Header from './Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Component } from 'react';
import EnrollNewStudentView from '../views/EnrollNewStudentView';
import { addStudentThunk, enrollNewStudentThunk } from '../../store/thunks';

class EnrollNewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          imageurl: "",
          gpa: 0.0, 
          email: "",
          campusId: null,
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let addingstudent = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.props.location.query.campus_id,
            email: this.state.email,
            imageurl: this.state.imageurl,
            gpa: this.state.gpa
        };

        let newStudent = await this.props.addStudent(addingstudent);

        this.setState({
            firstname: "", 
            lastname: "", 
            url: "", 
            gpa: 0.0,
            email: "",
            campusId: null, 
            redirect: true, 
            redirectId: addingstudent.campusId 
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
    //displays called components and passes handelrs and other props
    render() {
        return (
            <div>
                <Header/>
                <EnrollNewStudentView
                    campus_id = {this.props.location.query}
                    handleChange = {this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.redirect && (<Redirect to={`/campus/${this.state.redirectId}`}/>)}
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        enrollNewStudent: (student)=> dispatch(enrollNewStudentThunk(student)),
    });
};

export default connect(null, mapDispatch)(EnrollNewStudentContainer);

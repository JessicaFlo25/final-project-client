import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks'

class NewCampusContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      description: "", 
      address: "",
      imageurl: "",
      campusId: null, 
      redirect: false, 
      redirectId: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    let campus = {
        name: this.state.name,
        address: this.state.address,
        description: this.state.description,
        imageurl: this.state.imageurl,
    };
    
    let newCampus = await this.props.addCampus(campus);

    this.setState({
      name: "", 
      address: "", 
      description: "",
      imageurl: "", 
      redirect: true, 
      redirectId: newCampus.id
    });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    return (
      <div>
        <Header />
        <NewCampusView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      </div>          
    );
  }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);

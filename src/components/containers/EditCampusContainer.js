import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import { EditCampusView } from "../views";
import { Redirect } from 'react-router-dom';

class EditCampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      redirect: null
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let { campus } = this.props;
    
    campus = {
        name: this.state.name,
        address: this.state.address,
        description: this.state.description,
        imageurl: this.state.imageurl,
        id: campus.id
    };

    await this.props.editCampus(campus);
    this.setState({
        redirect: true
    });
  };

  render() {
    return (
      <div>
        <Header />
        <EditCampusView
          campus={this.props.campus}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.redirect && (
            <Redirect to={`/campuses`} />
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);

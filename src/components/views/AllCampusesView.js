/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return (
      <div>
        <div>There are no campuses.</div>
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </div>
    )
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      <Link to={`/newcampus`}>
        <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Add New Campus</button>
      </Link>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          
          <img src={campus.imageURL} style={{ width: '30%', height: 'auto', borderRadius: "30px" }}></img>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus ID: {campus.id}</h4>
          <h4>{campus.address}</h4>
          <h4>{campus.description}</h4>
          <button onClick={() => props.deleteCampus(campus.id)} style={{cursor:"pointer", width:"100px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Delete</button>
          <Link to={`/editcampus/${campus.id}`}>
            <button style={{cursor:"pointer", width:"100px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Edit</button>
          </Link>

        </div>
      ))}
      <br />

      <br /><br />
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
      return (
        <div className="jumbotron">
          <h1>React, Redux and React Router </h1>
          <p>Just about to kick asome ass with jsx</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      );
    }
}

export default HomePage;

import React, { Component } from 'react';

class DetailPage extends Component {

  render() {
    return (
        <div>
          <h2>Display results:</h2>
          <h3>Results: {this.props.pageNumber}</h3>
          <p>
          {JSON.stringify(this.props.obj) }
          </p>

        </div>
    );
  }
}

export default DetailPage;

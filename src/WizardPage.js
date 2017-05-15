import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import DetailPage from './DetailPage';

class WizardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {blergh: 'first', bizzow: 'first bizzow'},
        {foo: '2nd foo', bar: '2nd bizzow'},
        {rick: 'rick', astley: 'astley'},
      ]
    };
    console.log('- props', props);
    console.log('params', this.props.match.params);
  }

  // componentWillMount

  componentWillReceiveProps(nextProps) {
    console.log('c will receive', nextProps.match.params);
  }

  next() {
    console.log('in next');
    console.log(' - ', this.props.match.params);
  }

  nextPage() {
    console.log(this.props.match.params);
    return (_.toNumber(this.props.match.params.pageNumber) + 1)
  }

  render() {
    return (
      <div className="WizardPage block">
        <p className="">
          Here's a wizard component.
        </p>
        <DetailPage 
          obj={this.state.data[_.toNumber(this.props.match.params.pageNumber)-1]} 
          pageNumber={this.props.match.params.pageNumber}> 
        </DetailPage>

        <div className="col-md-8">
          <div className="row">
            <ul className="pagination pagination-sm">
              <li className="page-item">
                <Link to='/wizard/1'>1</Link>
              </li>
              <li className="page-item">
                <Link to='/wizard/2'>2</Link>
              </li>
              <li className="page-item">
                <Link to='/wizard/3'>3</Link>
              </li>
              <li>
                <Link to={'/wizard/' + this.nextPage()}>
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardPage;

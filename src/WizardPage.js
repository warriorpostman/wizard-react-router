import React, { Component } from 'react';
import { Link } from 'react-router';
import DetailPage from './DetailPage';

class WizardPage extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    console.log('- props', props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('c will receive', nextProps.params.stepNumber);
  }

  render() {
    return (
      <div className="WizardPage">
        <p className="">
          Here's a wizard component.
        </p>
        <div>
          <Link to={'/wizard/1'}>
            Start Wizard
          </Link>
        </div>
        <div>
          <Link to={'/wizard/2'}>
            2
          </Link>
        </div>
        <div>
          <Link to={'/wizard/3'}>
            3 
          </Link>
        </div>
        <DetailPage pageNumber={this.props.params.stepNumber}> 

        </DetailPage>
      </div>
    );
  }
}

export default WizardPage;

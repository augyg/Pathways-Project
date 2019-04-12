import React, {Component} from 'react';
import { connect } from 'react-redux';

import CreateAccountCompany from '../components/CreateAccountCompany';
import CreateAccountProgrammer from '../components/CreateAccountProgrammer';

class CreateAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountType: 'company'
    }
  }

  render() {
    return (
      <div>
        {
          (this.state.selectedAccountType === 'programmer') ?
            <CreateAccountCompany />
          :
            <CreateAccountProgrammer />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default {
  component: connect(mapStateToProps)(CreateAccountPage)
}
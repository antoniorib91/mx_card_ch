import React from 'react';

import { InputProps } from '../input';
import { FormHelpers } from '../../../utils/form.helpers';

import '../input.scss';

type InputState = {};
 
class InputNumber extends React.Component<InputProps, InputState> {

  public id?: string;

  componentDidMount = () => {
    this.inputInitId();
  }

  inputInitId = () => {
    this.id = this.props.id ? this.props.id : FormHelpers.generateRandomHash();
  }

  render() { 
    return ( 
      <div className="form-group">
        <label htmlFor={this.id}>{this.props.label}</label>
        <input type="text" className="form-control" id={this.id} />
      </div>
    );
  }
}
 
export default InputNumber;
/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */

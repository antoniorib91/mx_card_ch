import React from 'react';

import '../input.scss';
import { InputProps } from '../input';
import { FormHelpers } from '../../../utils/form.helpers';

type InputState = {};
 
class InputText extends React.Component<InputProps, InputState> {

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
 
export default InputText;
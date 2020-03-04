import React from 'react';

import { InputProps } from '../input';

import '../input.scss';

type InputState = {};
 
class InputText extends React.Component<InputProps, InputState> {

  public componentDidMount() {
    this.inputInitId();
  }

  public inputInitId() {

  }

  render() { 
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type="text" className="form-control custom" id={this.props.id} />
      </div>
    );
  }
}
 
export default InputText;
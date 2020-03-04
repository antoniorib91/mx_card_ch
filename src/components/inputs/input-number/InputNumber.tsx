import React from 'react';

import { InputProps } from '../input';

import '../input.scss';

type InputState = {};
 
class InputNumber extends React.Component<InputProps, InputState> {

  render() { 
    return ( 
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type="text" className="form-control custom" id={this.props.id} />
      </div>
    );
  }
}
 
export default InputNumber;
/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */

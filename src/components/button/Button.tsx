import React from 'react';
import './Button.scss'

export interface ButtonProps {
  type: 'submit' | 'button'
}
 
export interface ButtonState {
  
}
 
class Button extends React.Component<ButtonProps, ButtonState> {
  render() { 
    return (
      <button type={this.props.type} className="btn btn-primary submit">
        { this.props.children }
      </button>
    );
  }
}
 
export default Button;
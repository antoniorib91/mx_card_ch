import React from 'react';
import { SelectModel } from './select.model';
import './Select.scss';


interface SelectProps {
  label?: string;
  values: Array<SelectModel>;
  id?: string;
}
 
interface SelectState {
  opened: boolean
}

class Select extends React.Component<SelectProps, SelectState> {

  constructor(props: SelectProps) {
    super(props);
    this.state = {
      opened: false
    };
  }

  render() { 
    return (
     <div>
        <label htmlFor={this.props.id}>{ this.props.label }</label>
        <input className="form-control custom" />
        { this.state.opened ?  <i className="arrow up">&#8250;</i> :  <i className="arrow down">&#8250;</i> }
     </div>
    );
  }
}
 
export default Select;

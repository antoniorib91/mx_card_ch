import React from 'react';
import InputNumber from '../../../components/inputs/input-number/InputNumber';
import InputText from '../../../components/inputs/input-text/InputText';
import Button from '../../../components/button/Button';
import Select from '../../../components/select/Select';
import './Form.scss';

export interface FormProps {
  
}
 
export interface FormState {
  
}
 
class Form extends React.Component<FormProps, FormState> {
  // state = { :  }
  render() { 
    return (
      <form>
        <div className="form-group">
          <InputNumber label="Card Number" id="inputNumber"></InputNumber>
        </div>
        <div className="form-group">
          <InputText label="Card Name" id="inputText"></InputText>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-4">
            <Select label="Expiration Date" values={[{ value: 'teste', key: '1' }] }></Select>
          </div>
          <div className="form-group col-sm-4">
            <Select values={[{ value: 'teste', key: '1' }] }></Select>
          </div>
          <div className="form-group col-sm-4 with-space">
            <InputText label="CVV"></InputText>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
 
export default Form;
import React from 'react';
import './Main.scss';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import InputNumber from '../components/inputs/input-number/InputNumber';
import InputText from '../components/inputs/input-text/InputText';

class Main extends React.Component {
  render() { 
    return (
      <div className="container">
        <div className="content">
          <Card className="size">
            <form>
              <InputNumber label="Card Number" id="inputNumber"></InputNumber>
              <InputText label="Card Name"></InputText>
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}
 
export default Main;
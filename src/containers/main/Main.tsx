import React from 'react';
import './Main.scss';
import Card from '../../components/card/Card';
import Form from './form/Form';

class Main extends React.Component {
  render() { 
    return (
      <div className="container">
        <div className="content">
          <Card className="size">
            <Form></Form>
          </Card>
        </div>
      </div>
    );
  }
}
 
export default Main;
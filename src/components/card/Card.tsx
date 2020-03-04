import React from 'react';
import './Card.scss';

export interface Props {
  className?: string
}

export interface State {
  
}

class Card extends React.Component<Props, State>{
  render() { 
    return (
      <div className={"card " + this.props.className}>
        <div className="card-body">
          { this.props.children }
        </div>
      </div>
    );
  }
}
 
export default Card;

import React, {Component} from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
    render(){
        return(
            <div className='card-container'>
                <div className='card-body'>
                    <CardBack />
                    
                    <CardFront />
                </div>
            </div>
        )
    }
}

export default Card
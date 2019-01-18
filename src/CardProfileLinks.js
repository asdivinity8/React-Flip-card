import React, {Component} from 'react';

class CardProfileLinks extends Component {
    render(){
        const profileLinks = ['twitter','facebook','linkdin','dribble'];
        const linksList = profileLinks.map((link,index)=> <li key={index}>
        <a href='#'>
            <i className={'fa fa-'+ link}></i>
        </a>
        </li>
        );

        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    {linksList}
                </ul>
            </div>
        )
    }
}

export default CardProfileLinks
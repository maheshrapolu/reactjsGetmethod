import React from 'react';
import './style.css';


 export class lunches extends React.Component {
    render() {
        return (
            <div className='lunch'>
                <img src={this.props.banner}/>
                <div className='content'>
                    <div className='info'>
                        <h1>{this.props.title}</h1>
                        <h1>{this.props.lunchdate}</h1>
                    </div>
                        <p>{this.props.des}</p>
                </div>
            </div>
        );
    }
}


export default lunches; 
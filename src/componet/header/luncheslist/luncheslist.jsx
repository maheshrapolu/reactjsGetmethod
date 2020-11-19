import React from 'react';
import Lunches, { lunches } from '../Lunch/lunches';
import './style.css';
import axios from 'axios';
import {Link} from "react-router-dom";


export class luncheslist extends React.Component {
    state = {
        launches:[]
    }
    componentDidMount=()=>{
        this.getLunches()
    }
    getLunches=()=>{
        axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
            this.setState(
                {launches:res.data}
            )
        }).catch((error)=>{
            console.log(error)
        })

    }
   launchList=()=>{
        const launchlistcomponets=this.state.launches.map(launch =>{
            const image=launch.links.flickr_images==0 ?
            'https://live.staticflickr.com/65535/49672551378_fabc17ef6f_o.jpg' :launch.links.flickr_images[0];
           return (
           <Link to={"/view/"+launch.flight_number}>
           <Lunches 
           banner={image}
           title={launch.mission_name} 
           lunchdate={launch.launch_date_local} 
           des={launch.details}/>
           </Link>)
       })
       return launchlistcomponets
   }
    render() {
        return (
            <div className="lunch-list">
             {this.launchList()}
            </div>
        );
    }
}

export default luncheslist;
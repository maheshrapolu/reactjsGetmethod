import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

export class launchview extends React.Component {
  state = {
    launch: {},
  };
  componentDidMount = () => {
    const filghtNo = this.props.match.params.flight_number;
    this.getLaunch(filghtNo);
  };
  getLaunch = (filghtNo) => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + filghtNo)
      .then((res) => {
        this.setState({
          launch: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  launchAttribute=( title,value)=>{
return(
  <div>
    <h1>{title}</h1>
    <h1>{value}</h1>
  </div>
)
  }
  render() {
    console.log(this.state.launch);
    return (<div>
      {this.launchAttribute("Mission Name:",this.state.launch.mission_name)}
      {this.launchAttribute("Flight Number:",this.state.launch.flight_number)}
      {this.launchAttribute("Time:",this.state.launch.launch_date_local)}
      {this.launchAttribute("Details:",this.state.launch.details)}


    </div>
    )
  }
}

export default withRouter(launchview);

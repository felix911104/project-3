import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import MiniCardClinic from "../../MiniCardClinic"


class Clinic extends Component {
  state = {
    clinic: []
  };

  componentDidMount() {
    this.getClinic()
  }
  getClinic = () => {
    API.getClinic().then(res => {
      console.log(res)
      this.setState({
        clinic: res.data
      })
     
    }
    )
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
          {this.state.clinic.length ? (
            <div>
              {this.state.clinic.map((clinic,index) => (
          <MiniCardClinic
          name={clinic.Name} 
          location = {clinic.Location}

       
        />
              
              ))}
             
             </div>

          
          ) : (
              <h2 className="text-center">No clinics</h2>
            )}
       
      </div>
    );
  }

}

export default Clinic;

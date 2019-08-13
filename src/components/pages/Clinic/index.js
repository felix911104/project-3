import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
import "./style.css";
class Clinic extends Component {
  state = {
    clinic: [],
    userId: "-1"
  };

  componentDidMount() {
    this.getClinic()
    this.checkToken()

  }
  checkToken =() =>{
    let userId=parseInt( localStorage.getItem("sheltrUserId"))
    let expireTime = localStorage.getItem("sheltrExpireTime")
    expireTime = new Date(expireTime)
    if(!userId){
      return
    }
    else if(userId<0)
    {
      return
    }
    else if(expireTime>new Date()){
      this.setState({
        userId: userId
      })
      console.log(this.state.userId)
    }
  }

  getClinic = () => {
    API.getClinic().then(res => {
      this.setState({
        clinic: res.data
      })
    })
      .catch(err => console.log(err));
  }

  saveClinicsToUser = (clinic) => {

    API.saveClinicsToUser(clinic).then(res => {
      alert("Clinics saved ")
    })
}




  render() {
    return (
      <div>
      <NavTabs />
        <h1 className="text-center">Clinic</h1>
        {this.state.clinic.length ? (
          <div>
          {this.state.clinic.map((clinic, index) => (
            <Card className="displaycards" title={index + 1} icon="download">
                {(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveClinicsToUser({
                  userId: this.state.userId,
                  clinicData: clinic
                }
                )} />) : (<p></p>)}
                <p><b>Clinic Name:</b><br></br> {clinic.Name}</p>
                <p><b>Location:<br></br></b> {clinic.Location}</p>
                <p><b>Hours:</b><br></br> {clinic.DaysOfOperation}</p>
                <p><b>Phone Number:</b><br></br> {clinic.PhoneNumber}</p>
                <p><b>Clients Served:</b><br></br> {clinic.ClientServed}</p>
                <p><b>Services:</b><br></br> {clinic.Services}</p>
                <p><b>Notes:</b><br></br> {clinic.Notes}</p>
                <p><b>Link:</b><br></br> {clinic.Link}</p>
              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center">Clinics</h2>
          )}
      </div>
    );
  }

}

export default Clinic;

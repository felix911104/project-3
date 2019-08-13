import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
// import "./style.css";
import { Link } from "react-router-dom";
class Clinic extends Component {
  state = {
    clinics: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()
    this.getClinics()

  }
  checkToken = () => {
    let userId = parseInt(localStorage.getItem("sheltrUserId"))
    let expireTime = localStorage.getItem("sheltrExpireTime")
    expireTime = new Date(expireTime)
    if (!userId) {
      return
    }
    else if (userId < 0) {
      return
    }
    else if (expireTime > new Date()) {
      this.setState({
        userId: userId
      })
      console.log(this.state.userId)
    }
  }

  getClinics = () => {
    API.getClinic().then(res => {
      console.log(res)
      this.setState({
        clinics: res.data
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
      <h1 className="text-center">Clinics</h1>
      <h3 className="text-center">A list of Clinics that offer low-cost or free services.
      </h3>
        <h3 className="text-center mb-5"> To save preferences for quick reference
        <Link to="/login"> Log-In </Link>
          or
        <Link to="/signup"> Sign-Up </Link>
        </h3>
      {this.state.clinics.length ? (
        <div>
          {this.state.clinics.map((clinic, index) => (
            <Card className="displaycards" title={index + 1} icon="download">
              <div className="Card-Header">{(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveClinicsToUser({
                // {(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveClinicsToUser({
                userId: this.state.userId,
                clinicData: clinic
              }
              )} />) : (<p></p>)}
              </div>
              <p><b>Name:</b><br></br> {clinic.Name}</p>
              <p><b>Location:</b><br></br> {clinic.Location}</p>
              <p><b>Hours:</b><br></br> {clinic.DaysOfOperation}</p>
              <p><b>Phone Number:</b><br></br> {clinic.PhoneNumber}</p>
              <p><b>Clients Served:</b><br></br> {clinic.ClientsServed}</p>
              <p><b>Services:</b><br></br> {clinic.Services}</p>
              <p><b>Notes:</b><br></br> {clinic.Notes}</p>
              <p><b>Link:</b><br></br> {clinic.Link}</p>

            </Card>

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

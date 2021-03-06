import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
// import "./style.css";
import { Link } from "react-router-dom";
class Shelters extends Component {
  state = {
    shelters: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()
    this.getShelters()

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

  getShelters = () => {
    API.getShelters().then(res => {
      console.log(res)
      this.setState({
        shelters: res.data
      })
    })
      .catch(err => console.log(err));
  }

  saveSheltersToUser = (shelter) => {

    API.saveSheltersToUser(shelter).then(res => {
      alert("Shelters saved ")
    })
  }


  render() {
    let loggedIn = this.state.userId !== "-1";
    return (
      <div>
        <NavTabs />
        <h1 className="text-center">Shelters</h1>
        <h3 className="text-center">A list of Shelters that offer services free services.</h3>
        <h3 className="text-center mb-5" hidden={loggedIn}>
          To save preferences for quick reference
        <Link to="/login"> Log-In </Link>
          or
        <Link to="/signup"> Sign-Up </Link>
        </h3>
        {this.state.shelters.length ? (
          <div>
            {this.state.shelters.map((shelter, index) => (
              <Card className="displaycards" title={index + 1} icon="download">
                <div className="Card-Header">{(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveSheltersToUser({
                  userId: this.state.userId,
                  shelterData: shelter
                }
                )} />) : (<p></p>)}
                </div>

                <p><b>Name:</b><br></br> {shelter.Name}</p>
                <p><b>Location:</b><br></br> {shelter.Location}</p>
                <p><b>Hours:</b><br></br> {shelter.DaysOfOperation}</p>
                <p><b>Phone Number:</b><br></br> {shelter.PhoneNumber}</p>
                <p><b>Clients Served:</b><br></br> {shelter.ClientsServed}</p>
                <p><b>Services:</b><br></br> {shelter.Services}</p>
                <p><b>Notes:</b><br></br> {shelter.Notes}</p>
                <p><b>Link:</b><br></br> {shelter.Link}</p>
                

              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center mt-5">No shelters</h2>
          )}
      </div>
    );
  }

}

export default Shelters;

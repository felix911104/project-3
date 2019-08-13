import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
// import "./style.css";
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

  saveClinicsToUser = (Clinic) => {

    API.saveClinicToUser(Clinic).then(res => {
      alert("Clinics saved ")
    })
  }


  render() {
    return (
      <div>
        <NavTabs />
        <h1 className="text-center">Clinics</h1>
        {this.state.clinics.length ? (
          <div>
            {this.state.clinics.map((clinic, index) => (
              <Card className="displaycards" title={index + 1} icon="download">
                <div className="Card-Header">{(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveClinicsToUser({
                  userId: this.state.userId,
                  clinicData: clinic
                }
                )} />) : (<p></p>)}
                </div>
                <p>Name: {clinic.Name}</p>
                <p>Location: {clinic.Location}</p>

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

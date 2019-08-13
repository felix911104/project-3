import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import DeleteBtn from "../../DeleteBtn";
import NavTabs from "../../Navbar/index";


class Preferences extends Component {
  state = {
    food: [],
    shelters: [],
    clinics: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()
  }

  checkToken = () => {
    let logInUserId = parseInt(localStorage.getItem("sheltrUserId"))
    let expireTime = localStorage.getItem("sheltrExpireTime")
    expireTime = new Date(expireTime)
    if (!logInUserId) {
      return
    }
    else if (logInUserId < 0) {
      return
    }
    else if (expireTime > new Date()) {
      this.getFood(logInUserId)
      this.getShelters(logInUserId)
      this.getClinics(logInUserId)
    }
  }

  getFood = (id) => {
    this.setState({
      userId: id
    })
    API.getFoodByUserId(id).then(res => {
      this.setState({
        food: res.data
      })
    })
      .catch(err => console.log(err));
  };

  getShelters = (id) => {
    this.setState({
      userId: id
    })
    API.getSheltersByUserId(id).then(res => {
      this.setState({
        shelters: res.data
      })

    })
      .catch(err => console.log(err));
  };

  getClinics = (id) => {
    this.setState({
      userId: id
    })
    API.getClinicsByUserId(id).then(res => {
      this.setState({
        clinics: res.data
      })

    })
      .catch(err => console.log(err));
  };


  deleteFoodFromUser = food => {
    API.deleteFoodFromUser(food).then(res => {
      this.getFood(this.state.userId)
    })
  };

  deleteShelterFromUser = shelter => {
    API.deleteShelterFromUser(shelter).then(res => {
      this.getShelters(this.state.userId)
    })
  };

  deleteClinicFromUser = clinic => {
    API.deleteClinicFromUser(clinic).then(res => {
      this.getClinics(this.state.userId)
    })
  };

  render() {
    return (
      <div>
        <NavTabs />
        <h1 className="text-center">Preferences</h1>
     
          {this.state.food.length || this.state.shelters.length || this.state.clinics.length ?
           (<p></p>): (<h4 className="text-center mt-5">Nothing Saved</h4>)}
    
        {this.state.food.length ? (
          <div>
            {this.state.food.map((food, index) => (
              <Card title="food" icon="download">
                <p><b>Program Name:</b> <br></br>{food.name_of_program}</p>
                <p><b>Time:</b> <br></br>{food.day_time}</p>
                <p><b>Meal Served:</b> <br></br>{food.meal_served}</p>
                <p><b>People:</b> <br></br>{food.people_served}</p>
                <p><b>Locaton:</b> <br></br>{food.location}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteFoodFromUser({
                  userId: this.state.userId,
                  foodData: food
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h3 className="text-center"></h3>
          )}

        {this.state.shelters.length ? (
          <div>
            {this.state.shelters.map((shelter, index) => (
              <Card title="shelter" icon="download">
                <p><b>Name:</b><br></br> {shelter.Name}</p>
                <p><b>Location:</b><br></br> {shelter.Location}</p>
                <p><b>Hours:</b><br></br> {shelter.DaysOfOperation}</p>
                <p><b>Phone Number:</b><br></br> {shelter.PhoneNumber}</p>
                <p><b>Clients Served:</b><br></br> {shelter.ClientsServed}</p>
                <p><b>Services:</b><br></br> {shelter.Services}</p>
                <p><b>Notes:</b><br></br> {shelter.Notes}</p>
                <p><b>Link:</b><br></br> {shelter.Link}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteShelterFromUser({
                  userId: this.state.userId,
                  shelterData: shelter
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h3 className="text-center"></h3>
          )}

        {this.state.clinics.length ? (
          <div>
            {this.state.clinics.map((clinic, index) => (
              <Card title="clinic" icon="download">
                <p><b>Name:</b><br></br> {clinic.Name}</p>
                <p><b>Location:</b><br></br> {clinic.Location}</p>
                <p><b>Hours:</b><br></br> {clinic.DaysOfOperation}</p>
                <p><b>Phone Number:</b><br></br> {clinic.PhoneNumber}</p>
                <p><b>Clients Served:</b><br></br> {clinic.ClientsServed}</p>
                <p><b>Services:</b><br></br> {clinic.Services}</p>
                <p><b>Notes:</b><br></br> {clinic.Notes}</p>
                <p><b>Link:</b><br></br> {clinic.Link}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteClinicFromUser({
                  userId: this.state.userId,
                  clinicData: clinic
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h3 className="text-center"></h3>
          )}

      </div>
    );
  }
}

export default Preferences;

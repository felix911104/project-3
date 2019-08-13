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
        <h1>Preferences</h1>
        {this.state.food.length ? (
          <div>
            {this.state.food.map((food, index) => (
              <Card title="food" icon="download">
                <p>time: {food.day_time}</p>
                <p>meal served: {food.meal_served}</p>
                <p>people: {food.people_served}</p>
                <p>locaton: {food.location}</p>
                <p>program name: {food.name_of_program}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteFoodFromUser({
                  userId: this.state.userId,
                  foodData: food
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h2 className="text-center">No food saved</h2>
          )}

        {this.state.shelters.length ? (
          <div>
            {this.state.shelters.map((shelter, index) => (
              <Card title="shelter" icon="download">
                <p>Name: {shelter.Name}</p>
                <p>Location: {shelter.Location}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteShelterFromUser({
                  userId: this.state.userId,
                  shelterData: shelter
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h2 className="text-center">No shelters saved</h2>
          )}
     
        {this.state.clinics.length ? (
          <div>
            {this.state.clinics.map((clinic, index) => (
              <Card title="clinic" icon="download">
                <p>Name: {clinic.Name}</p>
                <p>Location: {clinic.Location}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteClinicFromUser({
                  userId: this.state.userId,
                  clinicData: clinic
                }
                )} />) : (<p></p>)}
              </Card>

            ))}
          </div>
        ) : (
            <h2 className="text-center">No clinics saved</h2>
          )}

      </div>
    );
  }
}

export default Preferences;

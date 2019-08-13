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
    API.getClinicByUserId(id).then(res => {
      this.setState({
        clinics: res.data
      })
    })
      .catch(err => console.log(err))
  }


  deleteFoodFromUser = food => {
    API.deleteFoodFromUser(food).then(res => {
      this.getFood(this.state.userId)
    })
    // alert("not finish this function")
  };

  deleteShelterFromUser = food => {
    API.deleteShelterFromUser(food).then(res => {
      this.getShelters(this.state.userId)
    })
    // alert("not finish this function")
  };



  render() {
    return (
      <div>
        <NavTabs />
        <h1 className="text-center"></h1>
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

            {this.state.shelters.map((shelter, index) => (
              <Card title="shelter" icon="download">
                <p>time: {shelter.day_time}</p>
                <p>meal served: {shelter.meal_served}</p>
                <p>people: {shelter.people_served}</p>
                <p>locaton: {shelter.location}</p>
                <p>program name: {shelter.name_of_program}</p>
                {(this.state.userId !== "-1") ? (<DeleteBtn onClick={() => this.deleteShelterFromUser({
                  userId: this.state.userId,
                  shelterData: shelter
                }
                )} />) : (<p></p>)}
              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center">No food</h2>
          )}

      </div>
    );
  }
}

export default Preferences;

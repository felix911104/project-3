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

  // saveFoodToDatabase = (food) => {
  //   console.log("123321")
  //   console.log(this.state.userId)
  //   API.getFoodFromDatabase(food).then(foodInfo => {
  //     console.log(foodInfo.data)
  //     foodInfo.data ? (

  //       API.saveFoodToUser(food).then(res => {
  //         alert("food saved ")
  //       })
  //     ) : (
  //       API.saveFoodToDatabase(food).then(res => {
          
  //           console.log("food saved to database")
  //           API.saveFoodToUser(food).then(res => {
  //             alert("food saved ")
  //           })
  //         })
  //       )

  //   })
  // }


  render() {
    return (
      <div>
      <NavTabs />
        <h1 className="text-center">Clinic</h1>
        {this.state.clinic.length ? (
          <div>
          {this.state.clinic.map((clinic, index) => (
            <Card className="displaycards" title={index + 1} icon="download">
                {(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveFoodToDatabase({
                  userId: this.state.userId,
                  clinicData: clinic
                }
                )} />) : (<p></p>)}
                <p>Clinic Name: {clinic.Name}</p>
                <p>Location: {clinic.Location}</p>
                <p>Hours: {clinic.DaysOfOperation}</p>
                <p>Phone Number: {clinic.PhoneNumber}</p>
                <p>Clients Served: {clinic.ClientServed}</p>
                <p>Services: {clinic.Services}</p>
                <p>Notes: {clinic.Notes}</p>
                <p>Link: {clinic.Link}</p>
              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center">No Clinics</h2>
          )}
      </div>
    );
  }

}

<<<<<<< HEAD
export default Clinic;
=======
// export default Clinic;
import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
// import "./style.css";
class Food extends Component {
  state = {
    food: [],
    userId: "-1"
  };

  componentDidMount() {
    this.getFood()
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

  getFood = () => {
    API.getFood().then(res => {
      this.setState({
        food: res.data.data
      })
    })
      .catch(err => console.log(err));
  }

  saveFoodToDatabase = (food) => {
    console.log("123321")
    console.log(this.state.userId)
    API.getFoodFromDatabase(food).then(foodInfo => {
      console.log(foodInfo.data)
      foodInfo.data ? (

        API.saveFoodToUser(food).then(res => {
          alert("food saved ")
        })
      ) : (
        API.saveFoodToDatabase(food).then(res => {
          
            console.log("food saved to database")
            API.saveFoodToUser(food).then(res => {
              alert("food saved ")
            })
          })
        )

    })
  }


  render() {
    return (
      <div>
      <NavTabs />
        <h1 className="text-center">Food</h1>
        {this.state.food.length ? (
          <div>
          {this.state.food.map((food, index) => (
            <Card className="displaycards" title={index + 1} icon="download">
                <div className="Card-Header">{(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveFoodToDatabase({
                  userId: this.state.userId,
                  foodData: food
                }
                )} />) : (<p></p>)}
                </div>
                <p>Program Name: {food.name_of_program}</p>
                <p>Time: {food.day_time}</p>
                <p>Meal Served: {food.meal_served}</p>
                <p>People: {food.people_served}</p>
                <p>Locaton: {food.location}</p>
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

export default Food;
>>>>>>> a85430e9fd670c1dcf46129e0c3b91b4b9b70ed6

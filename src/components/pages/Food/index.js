import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
import "./style.css";
import { Link } from "react-router-dom";
class Food extends Component {
  state = {
    food: [],
    userId: "-1"
  };

  componentDidMount() {
    this.getFood()
    this.checkToken()

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
    let loggedIn = this.state.userId !== "-1";
    return (
      <div>
        <NavTabs />
        <h1 className="text-center">Food</h1>
        <h3 className="text-center">A list of Food Banks and more that offer low-cost or free food.
        </h3>
        <h3 className="text-center mb-5" hidden={loggedIn}>
          To save preferences for quick reference
        <Link to="/login"> Log-In </Link>
          or
        <Link to="/signup"> Sign-Up </Link>
        </h3>
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
                <p><b>Program Name:</b> <br></br>{food.name_of_program}</p>
                <p><b>Time:</b> <br></br>{food.day_time}</p>
                <p><b>Meal Served:</b> <br></br>{food.meal_served}</p>
                <p><b>People:</b> <br></br>{food.people_served}</p>
                <p><b>Locaton:</b> <br></br>{food.location}</p>
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

// import React, { Component } from "react";
// import API from "../../../utils/API";
// import Card from "../../Card";
// import MiniCardClinic from "../../MiniCardClinic"


// class Clinic extends Component {
//   state = {
//     clinic: []
//   };

//   componentDidMount() {
//     this.getClinic()
//   }
  // getClinic = () => {
  //   API.getClinic().then(res => {
  //     console.log(res)
  //     this.setState({
  //       clinic: res.data
  //     })
     
  //   }
  //   )
  //     .catch(err => console.log(err));
  // }


//   render() {
//     return (
//       <div>
//           {this.state.clinic.length ? (
//             <div>
//               {this.state.clinic.map((clinic,index) => (
//           <MiniCardClinic
//           name={clinic.Name} 
//           location = {clinic.Location}

       
//         />
              
//               ))}
             
//              </div>

          
//           ) : (
//               <h2 className="text-center">No clinics</h2>
//             )}
       
//       </div>
//     );
//   }

// }

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

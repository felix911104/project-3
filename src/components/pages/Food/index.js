import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
import { List } from "../../List";

class Food extends Component {
  state = {
    food: [],
    userId: "1"
  };

  componentDidMount() {
    this.getFood()
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
    // console.log(food)
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
        <h1>Food</h1>
        {this.state.food.length ? (
          <div>
            {this.state.food.map((food, index) => (
              <Card title={index + 1} icon="download">
                <p>time: {food.day_time}</p>
                <p>meal served: {food.meal_served}</p>
                <p>people: {food.people_served}</p>
                <p>locaton: {food.location}</p>
                <p>program name: {food.name_of_program}</p>
                {(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveFoodToDatabase({
                  userId: this.state.userId,
                  foodData: food
                }
                )} />) : (<p></p>)}
              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center">No food</h2>
          )}
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
      </p> */}
      </div>
    );
  }

}

export default Food;

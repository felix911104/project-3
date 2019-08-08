import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import DeleteBtn from "../../DeleteBtn";


class Preferences extends Component {
  state = {
    food: [],
    userId: "1"
  };

  componentDidMount() {
    this.getFood(this.state.userId)
  }

  getFood = (id) => {
    API.getFoodByUserId(id).then(res => {
      this.setState({
        food: res.data
      })
    })
      .catch(err => console.log(err));
  }

  deleteFoodFromUser(){
    alert("not finish this function")
  }

render() {
  return (
    <div>
    
      <h1>Preferences</h1>
{this.state.food.length ? (
  <div>
    {this.state.food.map((food, index) => (
      <Card title={index + 1} icon="download">
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

export default Preferences;

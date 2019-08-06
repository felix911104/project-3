import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import { List } from "../../List";

class Food extends Component {
  state = {
    food: []
  };

  componentDidMount() {
    this.getFood()
  }
  getFood = () => {
    API.getFood().then(res => {
      
      this.setState({
        food: res.data.data
      })
     
    }
    )
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>Food</h1>
        <Card title="food" icon="download">
          {this.state.food.length ? (
            <List>
              {this.state.food.map(food => (
                <p>{food.day_time}
                {food.meal_served}
                {food.people_served}
                {food.location}
                {food.name_of_program}

                </p>
              
              ))}
             


            </List>
          ) : (
              <h2 className="text-center">No food</h2>
            )}
        </Card>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
          ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
          elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
      </p>
      </div>
    );
  }

}

export default Food;

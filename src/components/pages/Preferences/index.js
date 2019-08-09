import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import DeleteBtn from "../../DeleteBtn";
import NavTabs from "../../Navbar/index";


class Preferences extends Component {
  state = {
    food: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()
  }

  checkToken =() =>{
    let logInUserId = parseInt(localStorage.getItem("sheltrUserId"))
    let expireTime = localStorage.getItem("sheltrExpireTime")
    expireTime = new Date(expireTime)
    if(!logInUserId){
      return 
    }
    else if(logInUserId<0)
    {
      return 
    }
    else if(expireTime>new Date()){
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

 

  deleteFoodFromUser = food=>{
    API.deleteFoodFromUser (food).then(res=> {
      this.getFood(this.state.userId)
    })
    // alert("not finish this function")
  };

render() {
  return (
    <div>
    <NavTabs />
      <h1>Preferences</h1>
{this.state.food.length ? (
  <div>
    {this.state.food.map((food, index) => (
      <Card title="food"  icon="download">
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

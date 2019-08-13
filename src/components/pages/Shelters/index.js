import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Card";
import SaveBtn from "../../SaveBtn";
// import { List } from "../../List";
import NavTabs from "../../Navbar/index";
// import "./style.css";
class Shelters extends Component {
  state = {
    shelters: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()
    this.getShelters()

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

  getShelters = () => {
    API.getShelters().then(res => {
      console.log(res)
      this.setState({
        shelters: res.data
      })
    })
      .catch(err => console.log(err));
  }

  saveSheltersToUser = (shelter) => {

    API.saveSheltersToUser(shelter).then(res => {
      alert("Shelters saved ")
    })
  }


  render() {
    return (
      <div>
        <NavTabs />
        <h1 className="text-center">Shelters</h1>
        {this.state.shelters.length ? (
          <div>
            {this.state.shelters.map((shelter, index) => (
              <Card className="displaycards" title={index + 1} icon="download">
                <div className="Card-Header">{(this.state.userId !== "-1") ? (<SaveBtn onClick={() => this.saveSheltersToUser({
                  userId: this.state.userId,
                  shelterData: shelter
                }
                )} />) : (<p></p>)}
                </div>
                <p>Name: {shelter.Name}</p>
                <p>Location: {shelter.Location}</p>

              </Card>

            ))}

          </div>


        ) : (
            <h2 className="text-center">No shelters</h2>
          )}
      </div>
    );
  }

}

export default Shelters;

import React from "react";
import Jumbotron from "../../Jumbotron";
import FoodCard from "../../FoodCard/index";
import ShelterCard from "../../ShelterCard/index";
import ClinicCard from "../../ClinicCard/index";
function Home() {
  return (
    <div>
      <Jumbotron/>
      <FoodCard/>
      <ClinicCard/>
      <ShelterCard/>
    </div>
  );
}

export default Home;

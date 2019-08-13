import React from "react";
import Jumbotron from "../../Jumbotron";
import FoodCard from "../../FoodCard/index";
import ShelterCard from "../../ShelterCard/index";
import ClinicCard from "../../ClinicCard/index";
import Footer from "../../Footer/index"
function Home() {
  return (
    <div>
      <Jumbotron />
      <FoodCard />
      <ClinicCard />
      <ShelterCard />
      <Footer />
    </div>
  );
}

export default Home;

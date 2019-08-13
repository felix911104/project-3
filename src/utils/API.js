import axios from "axios";

var host = () => {
  var isLocalHost = window.location && window.location.host && window.location.host.indexOf('localhost') >= 0;

  return "https://sheltr-p3.herokuapp.com"
  

}

export default {


  getFood: function (q) {
    return axios.get(`${host()}/api/food`);
  },

  saveFoodToDatabase: function (foodData) {
    return axios.post(`${host()}/api/fooddatabase`, foodData);
  },

  saveFoodToUser: function (foodData) {
    return axios.post(`${host()}/api/foodtouser`, foodData);
  },

  getFoodFromDatabase: function (foodData) {
    return axios.get(`${host()}/api/foodindatabase/` + foodData.foodData.location);
  },

  getFoodByUserId: function (id) {
    return axios.get(`${host()}/api/userfood/` + id);
  },

  deleteFoodFromUser: function (food) {
    return axios.delete(`${host()}/api/deletefood/` + food.userId + "/" + food.foodData.id);
  },



  getClinic: function () {
    return axios.get(`${host()}/api/clinics`)
  },

  // saveClinicToUser: function (ClinicsData) {
  //   return axios.post(`${host()}/api/Clinicstouser`, ClinicsData);
  // },


  // getClinicsByUserId: function (id) {
  //   return axios.get(`${host()}/api/userClinics/` + id);
  // },

  // deleteClinicFromUser: function (Clinic) {

  //   return axios.delete(`${host()}/api/deleteClinic/` + Clinic.userId + "/" + Clinic.clinicData.id);
  // },
  saveClinicsToDatabase: function (ClinicData) {
    return axios.post(`${host()}/api/Clinicsdatabase`, ClinicData);
  },

  saveClinicsToUser: function (clinicData) {
    return axios.post(`${host()}/api/clinictouser`, clinicData);
  },
  getClinicByUserId: function (id) {
    return axios.get(`${host()}/api/userclinic/` + id);
  },
  deleteClinicFromUser: function (clinic) {
    return axios.delete(`${host()}/api/deleteclinic/` + clinic.userId + "/" + clinic.clinicData.id);
  },




  getShelters: function (q) {
    return axios.get(`${host()}/api/Shelters`);
  },

  saveSheltersToDatabase: function (SheltersData) {
    return axios.post(`${host()}/api/Sheltersdatabase`, SheltersData);
  },

  saveSheltersToUser: function (SheltersData) {
    return axios.post(`${host()}/api/Shelterstouser`, SheltersData);
  },

  getSheltersByUserId: function (id) {
    return axios.get(`${host()}/api/userShelters/` + id);
  },

  deleteShelterFromUser: function (Shelter) {

    return axios.delete(`${host()}/api/deleteShelter/` + Shelter.userId + "/" + Shelter.shelterData.id);
  },
};

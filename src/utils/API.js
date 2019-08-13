import axios from "axios";

var host = () => {
  var isLocalHost = window.location && window.location.host && window.location.host.indexOf('localhost') >= 0;

  return isLocalHost ?
    "https://sheltr-p3.herokuapp.com" :
    "https://sheltr-p3.herokuapp.com";
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

  saveClinicToUser: function (ClinicsData) {
    return axios.post(`${host()}/api/Clinicstouser`, ClinicsData);
  },


  getClinicsByUserId: function (id) {
    return axios.get(`${host()}/api/userClinics/` + id);
  },

  deleteClinicFromUser: function (Clinic) {

    return axios.delete(`${host()}/api/deleteClinic/` + Clinic.userId + "/" + Clinic.clinicData.id);
  },
  getClinicByUserId: function (id) {
    return axios.get(`${host()}/api/userclinic/` + id);
  },
  deleteClinicFromUser: function (clinic) {
    return axios.delete(`${host()}/api/deleteclinic/` + clinic.userId + "/" + clinic.clinicData.id);
  },



  // getClinicsByUserId: function (id) {
  //   return axios.get(`${host()}/api/userClinics/` + id);
  // },

  // deleteClinicsFromUser: function (Clinics) {
  //   return axios.delete(`${host()}/api/deleteClinics/` + Clinics.userId + "/" + Clinics.ClinicsData.id);
  // },



  // // Gets books from the Google API
  // getBooks: function(q) {
  //   return axios.get("/api/google", { params: { q: "title:" + q } });
  // },
  // // Gets all saved books
  // getSavedBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Deletes the saved book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves an book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);

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

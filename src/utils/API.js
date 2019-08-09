import axios from "axios";

export default {
  getFood: function(q) {
      return axios.get("https://intense-escarpment-74172.herokuapp.com/api/food");
    },

  saveFoodToDatabase: function(foodData){
    return axios.post("https://intense-escarpment-74172.herokuapp.com/api/fooddatabase", foodData);
  },

  saveFoodToUser: function(foodData){
    return axios.post("https://intense-escarpment-74172.herokuapp.com/api/foodtouser", foodData);
  },
  
  getFoodFromDatabase: function(foodData){
    return axios.get("https://intense-escarpment-74172.herokuapp.com/api/foodindatabase/" + foodData.foodData.location);
  },
  
  getFoodByUserId: function(id){
    return axios.get("https://intense-escarpment-74172.herokuapp.com/api/userfood/" + id);
  },

  deleteFoodFromUser: function(food){
    return axios.delete("https://intense-escarpment-74172.herokuapp.com/api/deletefood/"+ food.userId+"/"+food.foodData.id);
  },


  getClinic: function() {
    return axios.get("https://intense-escarpment-74172.herokuapp.com/api/clinic")
  }

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
  };

import axios from "axios";

export default {
  getFood: function(q) {
      return axios.get("http://localhost:8080/api/food");
    },

  saveFoodToDatabase: function(foodData){
    return axios.post("http://localhost:8080/api/fooddatabase", foodData);
  },

  saveFoodToUser: function(foodData){
    return axios.post("http://localhost:8080/api/foodtouser", foodData);
  },
  
  getFoodFromDatabase: function(foodData){
    return axios.get("http://localhost:8080/api/foodindatabase/" + foodData.foodData.location);
  },
  
  getFoodByUserId: function(id){
    return axios.get("http://localhost:8080/api/userfood/" + id);
  },

  deleteFoodFromUser: function(food){
    return axios.delete("http://localhost:8080/api/deletefood/"+ food.userId+"/"+food.foodData.id);
  },


  getClinic: function() {
    return axios.get("http://localhost:8080/api/clinic")
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
  // }
};

const mongoose = require("mongoose");
const mongoURI =
 "mongodb+srv://omjasharma:omjaomja@cluster0.ge1deik.mongodb.net/Hangry_bird?retryWrites=true&w=majority";
const mongoDB = async () => {
  mongoose.connect(mongoURI, (err, result) => {
    if (err) {
      console.log("---", err);
    } else {
      console.log("connected sucessfully");
      const data_fatched = mongoose.connection.db.collection("food_item");
      data_fatched.find({}).toArray(async function (err, data) {
        const food_category = await mongoose.connection.db.collection("food_category");
        food_category.find({}).toArray(function (err, catData) {
          if (err) {
            console.log("---", err);
          } else {
            global.food_item  = data;
            global.foodCategory = catData;
            //console.log(global.food_item)
          }
        });

        // if (err) {
        //     console.log("---", err);
        // }

        // else {
        //         global.food_Item = data;
        //         // console.log(global.food_Item)
        // }
      });
    }
  });
};

module.exports = mongoDB;

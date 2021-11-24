import mongoose from "mongoose";

//create a schema, to specify that each post must to have this data
const clothesSchema = mongoose.Schema({
  selectedFile: String,
  name: String,
  description: String,
  category: String,
  brand: String,
  size: String,
  condition: String,
  colour: String,
  price: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//turn the schema into a model: exporting a mongoose model on the postClothes file
//--> on this model we can later run commands like find, create, delete and update
const AddClothes = mongoose.model("AddClothes", clothesSchema);
export default AddClothes;

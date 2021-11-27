import AddClothes from "../models/addClothes.js";

export const getClothes = async (req, res) => {
  try {
    const addClothes = await AddClothes.find();
    console.log(addClothes);
    res.status(200).json(addClothes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addClothes = async (req, res) => {
  //with post requests you have acces to the req.body
  const postClothes = req.body;

  const newClothes = new AddClothes(postClothes);
  try {
    await newClothes.save();
    res.status(201).json(newClothes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateClothes = async (req, res) => {
  const { id: _id } = req.params;
  const clothes = req.body;
  if (!mongoose.Types.Object.isValid(_id))
    return res.status(404).send("No clothes with that id");

  const updatedClothes = await AddClothes.findByIdAndUpdate(_id, clothes, {
    new: true,
  });
  res.json(updatedClothes);
};

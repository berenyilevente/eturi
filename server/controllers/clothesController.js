import mongoose from "mongoose";
import AddClothes from "../models/addClothes.js";

export const getClothes = async (req, res) => {
  try {
    const addClothes = await AddClothes.find();

    res.status(200).json(addClothes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Query = /clothes?:page=1 -> used to query something
//Params = /clothes/:id -> used to get a specific item
export const getClothesBySearch = async (req, res) => {
  const searchQuery = req.query.searchQuery;
  try {
    const brand = new RegExp(searchQuery, "i");
    const category = new RegExp(searchQuery, "i");
    const name = new RegExp(searchQuery, "i");
    const clothingType = new RegExp(searchQuery, "i");

    const clothes = await AddClothes.find({
      $or: [{ brand }, { category }, { name }, { clothingType }],
    });
    res.json({ data: clothes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClothesById = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const clothes = req.body;
    if (!mongoose.Types.Object.isValid(_id))
      return res.status(404).send("No clothes with that id");
    const addClothes = await AddClothes.findById(_id, clothes);
    res.status(200).json(addClothes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const filterClothes = async (req, res) => {
  const filterQuery = req.query.filterQuery;
  const filterParameters = JSON.parse(filterQuery);
  try {
    const clothesFiltered = await AddClothes.find(filterParameters);
    res.json({ data: clothesFiltered });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addClothes = async (req, res) => {
  //with post requests you have access to the req.body
  const postClothes = req.body;

  const newClothes = new AddClothes({
    ...postClothes,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
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

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No clothes with that id");
  const updatedClothes = await AddClothes.findByIdAndUpdate(_id, clothes, {
    new: true,
  });
  res.json(updatedClothes);
};

export const deleteClothes = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No clothes with that id");

  await AddClothes.findByIdAndRemove(id);

  console.log("DELETE");
  res.json({ message: "Clothes item deleted successfully" });
};

export const likeClothes = async (req, res) => {
  const { id } = req.params;

  console.log(id)
  if (!req.userId) return res.json({ message: "Not authenticated" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No clothes with that id");

  const clothes = await AddClothes.findById(id);

  const index = clothes.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    clothes.likes.push(req.userId);
  } else {
    clothes.likes = clothes.likes.filter((id) => id !== String(req.userId));
  }

  const likedClothes = await AddClothes.findByIdAndUpdate(id, clothes, {
    new: true,
  });
  res.json(likedClothes);
};

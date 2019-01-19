const mongoose = require("mongoose");
const locationModel = mongoose.model("location");

async function addLocation(params) {
  const { name, address, lat, lng } = params;
  const location = new locationModel({
    name,
    address,
    lat,
    lng
  });
  return await location.save();
}

async function getLocations() {
  const locations = await locationModel.find();
  return locations;
}

async function getLocation(id) {
  const location = await locationModel.findById(id);
  if (!location) {
    throw new Error("Could not find the location for the provided id");
  }
  return location;
}

async function updateLocation(params) {
  const { id, name, address, lat, lng } = params;
  const location = await locationModel.findById(id);
  if (!location) {
    throw new Error("Could not find the location for the provided id");
  }
  location.set({
    name,
    address,
    lat,
    lng
  });
  return await location.save();
}

async function deleteLocation(id) {
  const result = await locationModel.deleteOne({ _id: id });
  return result.n === 1;
}

module.exports = {
  addLocation,
  getLocations,
  getLocation,
  updateLocation,
  deleteLocation
};

const chai = require("chai");
const { expect } = chai;
const locationService = require("../services/location");

const SAMPLE_LOCATION_1 = {
  name: "Museum Island",
  address: "Berlin, Germany",
  lat: 52.5169,
  lng: 13.4019
};

const SAMPLE_LOCATION_2 = {
  name: "Museum Island-Edited",
  address: "Berlin, Germany-Edited",
  lat: 52.5169,
  lng: 13.4019
};

let newLocation;

describe("Location Service Unit Tests", () => {
  it("Should connect to database and get locations", async () => {
    const locations = await locationService.getLocations();
    expect(locations).to.be.an("array");
  });

  it("Should add SAMPLE_LOCATION_1", async () => {
    expect(newLocation).to.be.undefined;
    newLocation = await locationService.addLocation(SAMPLE_LOCATION_1);
    expect(newLocation)
      .to.be.deep.include(SAMPLE_LOCATION_1)
      .and.to.have.a.property("id");
  });

  it("Should get location details and must includes SAMPLE_LOCATION_1", async () => {
    const locationDetails = await locationService.getLocation(newLocation.id);
    expect(locationDetails.toJSON()).to.deep.equal(newLocation.toJSON());
  });

  it("Should update location to SAMPLE_LOCATION_2", async () => {
    const updateResult = await locationService.updateLocation({
      id: newLocation.id,
      ...SAMPLE_LOCATION_2
    });
    expect(updateResult.toJSON()).to.deep.include(SAMPLE_LOCATION_2);
    newLocation = updateResult;
  });

  it("Should delete location", async () => {
    const deleteResult = await locationService.deleteLocation(newLocation.id);
    expect(deleteResult).to.be.true;
  });
});

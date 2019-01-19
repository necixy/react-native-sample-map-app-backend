const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { expect } = chai;

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

const BASE_URL = `${process.env.SERVER_DOMAIN}:${process.env.PORT}`;

let newLocation;

function graphqlRequest(query, callback) {
  chai
    .request(BASE_URL)
    .post(`/${process.env.GRAPHQL_ROUTE}`)
    .send({
      query
    })
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      callback(res);
    });
}

describe("GraphQL Endpoints Tests", () => {
  it("Locations query test", done => {
    graphqlRequest(`{ locations { id name address lat lng } }`, res => {
      const { locations } = res.body.data;
      expect(locations).to.be.an("array");
      done();
    });
  });

  it("addLocation mutation test with SAMPLE_LOCATION_1", done => {
    const { name, address, lat, lng } = SAMPLE_LOCATION_1;
    graphqlRequest(
      `mutation { addLocation(name:"${name}", address:"${address}", lat:${lat}, lng:${lng}) { id name address lat lng } }`,
      res => {
        const { addLocation } = res.body.data;
        newLocation = addLocation;
        expect(addLocation).to.be.an("object");
        expect(addLocation).to.have.property("id");
        expect(addLocation).to.have.property("name", name);
        expect(addLocation).to.have.property("address", address);
        expect(addLocation).to.have.property("lat", lat);
        expect(addLocation).to.have.property("lng", lng);
        done();
      }
    );
  });

  it("Location (single) query test with SAMPLE_LOCATION_1", done => {
    const { name, address, lat, lng } = SAMPLE_LOCATION_1;
    graphqlRequest(
      `{ location (id:"${newLocation.id}") { id name address lat lng } }`,
      res => {
        const { location } = res.body.data;
        expect(location).to.be.an("object");
        expect(location).to.have.property("id");
        expect(location).to.have.property("name", name);
        expect(location).to.have.property("address", address);
        expect(location).to.have.property("lat", lat);
        expect(location).to.have.property("lng", lng);
        done();
      }
    );
  });

  it("updateLocation mutation test with SAMPLE_LOCATION_2", done => {
    const { name, address, lat, lng } = SAMPLE_LOCATION_2;
    graphqlRequest(
      `mutation { updateLocation(id:"${
        newLocation.id
      }",name:"${name}", address:"${address}", lat:${lat}, lng:${lng}) { id name address lat lng } }`,
      res => {
        const { updateLocation } = res.body.data;
        newLocation = updateLocation;
        expect(updateLocation).to.be.an("object");
        expect(updateLocation).to.have.property("id");
        expect(updateLocation).to.have.property("name", name);
        expect(updateLocation).to.have.property("address", address);
        expect(updateLocation).to.have.property("lat", lat);
        expect(updateLocation).to.have.property("lng", lng);
        done();
      }
    );
  });

  it("deleteLocation mutation test", done => {
    graphqlRequest(
      `mutation { deleteLocation(id:"${newLocation.id}") }`,
      function(res) {
        const { deleteLocation } = res.body.data;
        expect(deleteLocation).to.be.true;
        done();
      }
    );
  });
});

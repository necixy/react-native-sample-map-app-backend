const locationService = require("../services/location");

module.exports = app => {
  app.post("/locations", async (req, res) => {
    try {
      const location = await locationService.addLocation(req.body);
      res.status(200).send(location);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  app.get("/locations", async (req, res) => {
    try {
      const locations = await locationService.getLocations();
      res.status(200).send(locations);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  app.get("/locations/:id", async (req, res) => {
    try {
      const location = await locationService.getLocation(req.params.id);
      res.status(200).send(location);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  app.put("/locations", async (req, res) => {
    try {
      const location = await locationService.updateLocation(req.body);
      res.status(200).send(location);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  app.delete("/locations/:id", async (req, res) => {
    try {
      await locationService.deleteLocation(req.params.id);
      res.send(200);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
};

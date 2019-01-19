const server = require("../server");

describe("Stop Server", () => {
  it("Should Stop Server", () => {
    server.stopServer();
  });
});

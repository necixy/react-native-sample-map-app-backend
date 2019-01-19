# react-native-sample-map-app-backend

Backend for react-native-sample-map-app.

To run the server, first clone the repo and run the following command:

> npm install

Once node_module folder is created and all npm packages are installed, use following commands to run the app.

# For development purpose (with nodemon):

> npm run dev

# For production:

> npm start

To see the graphql endpoints, browse the following url when server is running.

> http://localhost:4000/graphql

Some decisions taken in application designs are as follow with their reasons:

- Used dotenv package for loading the `.env` file for environment variables during local run.

- Did not included .env in gitignore because this is a test project and I kept this file in git repo so it can be run easily without requiring database setup and other keys setup. Although this should not be used for production and real apps.

- Database is hosted on mLab.com under free tier and connection URI is stored in the .env file.

- In models, queries, mutations, routes, services folders there is a index file which includes the other files inside the respective folder. Although right now there is just one service/routes etc. for now but this practice allow more files to be includes inside one and make code more clean, readable and understable.

- Since the app is for demo purpose hence the api/graphql endpoints usage are unrestricted and publically available. In production app, they should be secured by the client key and jwt/cookie-sessions, most of the time I use passport with jwt to secure the api/graphql endpoints.

- In backend the graphql and REST routes both are worked on for demonstration purpose and working equally. However, on frontend planning to use only graphql.

- For testing purpose mocha framework is used along with chai library (for assertions) & chai-http (for graphql http endpoint requests). All tests are inside server/tests/ directory and server/tests/index.js includes all rest test file reference and defines the order in which tests are performed. Tests can be performed by command `npm test` or `npm run test`.

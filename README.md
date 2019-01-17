# react-native-sample-map-app-backend

Backend for react-native-sample-map-app.

- Did not included .env in gitignore because this is a test project and I kept it in git repo so it can run easily without requiring database setup and other keys setup.

- In models, queries, mutations, routes, services folders there is a index file which includes the other files inside the respective folder. Although right now there is just one service/routes etc. for now but this practice allow more files to be includes inside one and make code more clean, readable and understable.

- Since the app is for demo purpose hence the api/graphql endpoints usage are unrestricted and publically available. In production app, they should be secured by the client key and jwt/cookie-sessions, most of the time I use passport with jwt to secure the api/graphql endpoints.

- In backend the graphql and REST routes both are worked on for demonstration purpose and working equally. However, on frontend planning to use only graphql.

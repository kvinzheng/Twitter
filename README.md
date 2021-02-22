# Twitter 

### Description: This app allows the user to fetch Twitter usernames and make tweets(WIP) ###

## App View ###
<img src="/images/ada-compliance.png" width="800">


### Folder Structure ###
<img src="/images/test-coverage.png" width="800">


## Environment Dependencies:

## Node v10.12.0 ##
   - This project was set up using node v10.12.0. You should use the same version of node in order to avoid environment issues.

## Getting Started

- To install dependencies run `npm i`
- To run the web app and api server together, run `npm run dev`
- To run the web app separately, run `npm run start`
  - This may take a minute or 2 to run
- To run api server separately, (in another terminal) run `npm run server`

## Twitter-Screenname-Server API

- Run the twitter-screenname-server by running `npm run server`
- The server should be running on `http://localhost:4000`
- Navigating to `http://localhost:4000/twitter/user/search?username=chicago` should return a large JSON response.
- To use the api, you can make a request directly to `http://localhost:4000`.
- If port 4000 is in use, feel free to update /twitter-screenname-server/server.js source code to use a different port.


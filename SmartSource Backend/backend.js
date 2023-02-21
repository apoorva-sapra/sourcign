const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');

app.use(cors());

var API_KEY = 'edd810614e735a47788c08851cde0ed812a3430be55e270a78c50eedb7a92b9b';

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(API_KEY);


app.get('/', (req, res) => {
  // Extract the query parameters from the request
  const { q } = req.query;
  console.log('Query     ',q);
  const params = {
    engine: "google",
    q: q,
  };

  const callback = function (data) {
    res.send(data["organic_results"]);
  };
  
  // Show result as JSON
  search.json(params, callback);

  // Send a request to the SERP API, including the query parameters
  // axios.get(`https://serpapi.com/search.json?engine=google&q='+ ${q} + '&api_key='+ ${API_KEY};`,
  //   {
  //     transformRequest: [(data, headers) => {
  //       delete headers.common['X-Requested-With'];
  //       return data
  //     }]
  //   })
  //   .then(response => {
  //     console.log("backend response", response.data);
  //     // Return the JSON response from the SERP API
  //     res.json(response.data);
  //   })
  //   .catch(error => {
  //     // Return an error message
  //     res.send(error);
  //   });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});





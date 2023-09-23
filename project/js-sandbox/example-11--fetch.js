//  Fetch a dataset from the network, based on its URL,
// in the "static/data" directory
fetch('/static/data/nobel_winners.json')
  .then(function(response) {
    console.log(response.json())
  }
);
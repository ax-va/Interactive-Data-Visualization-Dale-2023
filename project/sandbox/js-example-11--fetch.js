// Fetch a dataset from the network based on its URL
fetch('data/nobel_winners_cleaned.json')
  .then(function(response) {
    console.log("Fetch:", response.json())
  }
);

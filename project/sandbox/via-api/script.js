// Run:
// python server_restful_api_with_paginating.py
// from
// https://github.com/ax-va/Python-Topics/blob/main/topics/flask_/server_restful_api_with_paginating.py

let BASE_URL = 'http://localhost:8000/'

async function getData(toFetch='winners/?category=Physics') {    
    let data = []
    let response
    while(true) {
        response = await fetch(BASE_URL + toFetch)
            .then(res => {return res.json()})

        data = data.concat(response.winners) // Add the page results
        toFetch = response.pagination.next_page  // Handle the next page
        if(!toFetch) break // No next-page so break out of the loop
    }
    return data
}

async function logToConsole() {
    let data = await getData('winners/?born_in=Germany')
    console.log(`${data.length} Nobel Prize winners were born in Germany:`, data)
    // Send the data to a suitable charting function
    //...
}

logToConsole()
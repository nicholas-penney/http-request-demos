// Simple fetch
async function fetchData1() {
    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=CH466HG&maxRows=10&username=demo';
    // Defaults to HTTP GET
    const response = await fetch(url);
    if (response.ok) {
        const json = await response.json(); // Extract the json payload from the response object
        const text = JSON.stringify(json);
        $('#output-fetch1').text(text);
    } else {
        console.log('Fetch error.')
    }
}

// Other fetch usage passing in an options object (not just a String by itself!) after URL
async function fetchData2() {
    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=CH299FY&maxRows=10&username=demo';
    const method = 'GET';
    const response = await fetch(url, { method });

    if (response.ok) {
        const json = await response.json(); // Extract the json payload from the response object

        const text = JSON.stringify(json);
        $('#output-fetch2').text(text);
    } else {
        console.log('Fetch error.')
    }
}
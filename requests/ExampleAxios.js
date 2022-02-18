// Simplest implementations using axios.get()
async function axiosData1() {
    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=OX161XG&maxRows=10&username=demo';
    try {
        const response = await axios.get( url );
        const { data } = response; // Same as response.data, since json payload the part we are most interested in.
        axiosPaste1(data);
    } catch (error) {
        console.log(error);
    }
}

// Axios with promises and HTTP Method passed in as string
function axiosData2() {
    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=OX120DX&maxRows=10&username=demo';
    const method = 'GET';

    axios({ url, method })
        .then( response => axiosPaste2(response.data) )
        .catch( error => console.log(error) );
}

function axiosPaste1(data) {
    const text = JSON.stringify(data);
    $('#output-axios1').text(text);
}

function axiosPaste2(data) {
    const text = JSON.stringify(data);
    $('#output-axios2').text(text);
}
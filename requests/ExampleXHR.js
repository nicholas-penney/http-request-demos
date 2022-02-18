// Simple xhr
function xhrData1() {
    const type = 'GET';
    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=HR53NH&maxRows=10&username=demo';

    xhrGet(url, dataReturn);
}

// Callback function for handling data
function dataReturn(text) {
    $('#output-xhr1').text(text);
}

// Container for XML HTTP Request boilerplate
function xhrGet(url, callback) {
    const type = 'GET';
    const async = true;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const { readyState, status } = this;
        const finished = readyState == 4 && status == 200;
        if (finished) {
            const { responseText } = this;
            callback(responseText);
        }
    };
    xhttp.open(type, url, async);
    xhttp.send();
}


function xhrPost(url, callback, params) {
    //var params = 'orem=ipsum&name=binny';
    const type = 'POST';
    const async = true;
    const headerKey = 'Content-type';
    const headerVal = 'application/x-www-form-urlencoded';

    var http = new XMLHttpRequest();
    http.open(type, url, async);
    http.setRequestHeader(headerKey, headerVal);

    http.onreadystatechange = function() {
        const { readyState, status } = this;
        const finished = readyState == 4 && status == 200;
        if (finished) {
            const { responseText } = this;
            callback(responseText);
        }
    }
    http.send(params);
}
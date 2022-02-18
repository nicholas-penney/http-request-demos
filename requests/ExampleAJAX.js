// Example AJAX
function ajaxData1() {

    const url = 'http://api.geonames.org/postalCodeSearchJSON?postalcode=ZE10QQ&maxRows=10&username=demo';
    const type = 'GET'; // defaults to 'GET'. Can also be called 'method' since jQuery v1.9.0 (from 2013).
    const dataType = 'json'; // returns a JSON object in success as 'result' arg
    const accepts = 'application/json; charset=UTF-8'; // What client will accept in return from the server, maps to 'Accept' header.
    const async = true; // Operates asynchronously

    $.ajax(
        {
            url, type, dataType,
            accepts, async,
    
            success: function(result) { pasteAjax1(result); },
            error: function(jqXHR, textStatus, errorThrown) { console.log('AJAX error:'); console.log(textStatus); }
        }
    );
}

function pasteAjax1(data) {
    const text = JSON.stringify(data);
    $('#output-ajax1').text(text);
}
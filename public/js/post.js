//buttons
var resSearch = document.getElementById("search-button");

//form text elements
var titleTxt = document.getElementById("ftitle");
var bodyTxt = document.getElementById("fbody");
var cityTxt = document.getElementById("fcity");
var stateTxt = document.getElementById("fstate");
var searchTxt = document.getElementById("fquery");

resSearch.addEventListener("click", function (e) {

    console.log("Button pressed")

    e.preventDefault();

    //emptys container's previous contents
    //petContainer.empty()

    //Url elements
    var gQueryURL = "https://serpapi.com/search.json?";
    var querys = {};

    //getting queries
    querys.api_key = "a19700bc3d3b84cf58c32f0921b2a53961bae53076f47432df7a5580af97880c";
    querys.device = "desktop";
    querys.engine = "google_maps";
    querys.q = `restaurant ${searchTxt.value} ${cityTxt.value} ${stateTxt.value}`;
    querys.google_domain = "google.com";
    querys.type = "search";
    querys.hl = "en";

    fetch(gQueryURL + new URLSearchParams(querys), {
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);  
        })
});
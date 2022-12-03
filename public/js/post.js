//buttons
var resSearch = document.getElementById("search-button");
var postButton = document.getElementById("post-button");

//form text elements
var titleTxt = document.getElementById("ftitle");
var bodyTxt = document.getElementById("fbody");
var cityTxt = document.getElementById("fcity");
var stateTxt = document.getElementById("fstate");
var rating = document.getElementById("post-rating");
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

// Creating a new post

const createPost = async (event) => {
    event.preventDefault();

    if (titleTxt && bodyTxt && cityTxt && stateTxt) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            Title: titleTxt.value,
            Body: bodyTxt.value,
            City: cityTxt.value,
            State: stateTxt.value,
            Rating: rating.value,
            DatePosted: Date.now(),
            Foodie_User: "AliceBob", //TODO: Get from login-session
            Resturant_ID: "ChIJo9QCaqssDogRmmJ0MAf-aeE" // TODO: Get from restaurant
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert('Failed to create post');
      }
    }
  };

  postButton.addEventListener("click", createPost)
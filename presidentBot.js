// define the dependencies
// const fetch = require("node-fetch");
const twit = require('twit');
const config = {
 consumer_key: process.env.consumer_key,
 consumer_secret: process.env.consumer_secret,
 access_token: process.env.access_token,
 access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);

const header = ["My fellow Americans,", "Everyone,", "Citizens of these United States,", "Brothers and sisters,", "If there's one thing I believe, it's that" ]

const body = ["today is a sad day for America.", "today will go down in history.", "today, we celebrate our country.", "I am not afraid to say that I am proud to be an American.", "I believe in the power of the American public.", "America's economy is thriving.", "a job for every American citizen is a must.", "America is the land of the free.", "America is the home of the brave.", "we all deserve a hot burger and a cold beer at the end of the day.", "this land is your land, this land is my land."]

const footer = ["Thank you for your service.", "Truth, justice, and the American way.", "I'm proud to be an American.", "Long may our banner wave.", "From sea to shining sea."]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

let tweet = function() {
  let h = getRandomInt(0, header.length)
  let b = getRandomInt(0, body.length)
  let f = getRandomInt(0, footer.length)
  Twitter.post('statuses/update', {
    status: header[h] + " " + body[b] + " " + footer[f]
  }, function(err, response) {
    if (response) {
      console.log('Successfully tweeted');
    }
    if (err) {
      console.log(err);
    }
  });
}

tweet();
setInterval(tweet, 120000);
//
// function tweetMaker() {
//   fetch('/scripts.json')
//   .then(resp => resp.json())
//   .then(scriptsJson => {
//     scriptsJson.forEach(function(element){
//       return element.tweet
//     })
//   })
// }

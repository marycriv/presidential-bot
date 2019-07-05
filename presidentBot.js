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

const header = ["My fellow Americans,", "Everyone,", "", "", "" ]
const body = ["today is a sad day for America.", "today will go down in history.", "today, we celebrate our country."]
const footer = ["Thank you for your service.", "Truth, justice, and the American way.", "I'm proud to be an American."]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

let tweet = function() {
  const h = getRandomInt(0, header.length)
  const b = getRandomInt(0, body.length)
  const f = getRandomInt(0, footer.length)
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

tweet();
setInterval(tweet, 600000);

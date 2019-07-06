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

const header = ["My fellow Americans,", "Everyone,", "Citizens of these United States,", "Brothers and sisters,", "If there's one thing I believe, it's that", "As president, I would ensure that,", "Please give me a moment to say,", "First of all,", "Citizens of these United States,", "I believe that", "I know that", "In order to form a more perfect union,", "Rest assured that", "I hold this truth to be self-evident:"]

const body = ["today is a sad day for America.", "today will go down in history.", "today, we celebrate our country.", "I am not afraid to say that I am proud to be an American.", "I believe in the power of the American public.", "America's economy is thriving.", "a job for every American citizen is a must.", "America is the land of the free.", "America is the home of the brave.", "we all deserve a hot burger and a cold beer at the end of the day.", "this land is your land, this land is my land.", "I like that Hamilton show.", "I have nothing but respect and admiration for our troops.", "progress does not come easy.", "there's no shame in a hard days work.", "we do not negotiate with terrorists.", "today we have made history.", "we can't be consumed by our petty differences anymore.", "I believe we need to work across party lines.", "we need to set aside petty differences in Washington.", "there needs to be a change in Washington.", "the true measure of a people’s strength is how they rise to master that moment when it does arrive.", "ask not what your country can do for you — ask what you can do for your country.", "our fathers brought forth on this continent, a new nation, conceived in liberty.", "we must stop the spread of fake news.", "the only thing I hate... is hate.", "freedom of speech is a must.", "America is and always will be free", "democracy is the best policy.", "we can do more as a people.", "we must be united in our democracy.", "all men are created equal.", "I'm just like my country; I'm young, scrappy, and hungry.", "life, liberty, and the pursuit of happiness are unalienable rights.", "I'm a simple man. I like pretty, dark-haired women, and breakfast food.", "never half-ass two things. Whole-ass one thing.", "history began July 4th, 1776. Anything before that was a mistake.", "America is the only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio."]

const footer = ["Truth, justice, and the American way.", "That is the American way.", "I'm proud to be an American.", "Long may our banner wave.", "From sea to shining sea.", "The fight continues.", "#Abbot2020", "We are all in this together.", "Never surrender.", "This is what I am fighting for.", "#AbbotForAmerica", "Congress must do its job.", "I must do my duty to my country.", "We will not go quietly into the night!", "A change is coming fast in Washington.", "God bless America.", "Now is the time to make real the promises of democracy.", "As for me, give me liberty or give me death.", "And you can quote me on that.", "It's time for Abbot in office.", "That is what the founding fathers were after.", "What can I do for my country?", "Let's all do our part."]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let tweet = function() {
  let h = getRandomInt(0, header.length)
  let b = getRandomInt(0, body.length)
  let f = getRandomInt(0, footer.length)

  Twitter.post('statuses/update', {
    status: header[h] + " " + body[b] + " " + footer[f]
  }, function(err, response) {
    if (response) {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      console.log(dateTime)
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

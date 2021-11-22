Para acceder a los tweets

1) abrir terminal y correr:
node 

2) En la terminal dar espacio y correr:
const Twit = require('twit')

3) En la terminal dar espacio y correr:
const T = new Twit({
  consumer_key :  '83ofeLLeHTeY5AnFRSifMSUAm',
  consumer_secret : 'HiqgDrd3E3YSTYsgsQ2agE1qOHuuz13FXEo3hHPFqlkJyg4Wmm',
  access_token :  '252295924-3eDI6VsRZkxMcHbRBSblJG1WWl3GHdSEaXEKbJa7',
  access_token_secret :  'H1tTNz24Yoe8z2HqNd8bjogjPqXxVLVRxBcDz7zaRxuJF',
    timeout_ms:  60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:  true,     // optional - requires SSL certificates to be valid.
  })


4)En la terminal dar espacio y correr:
T.get('search/tweets', { q: '#covid since:2011-07-11', count: 100 }, function (err, data, response) {
   console.log(data)
  })


5) los tweets van a aparecer en la terminal

6) En la terminal dar espacio y correr
var allTweet;
T.get('search/tweets', { q: '#covid since:2011-07-11', count: 100 }, function (err, data, response) {
   allTweet = data;
  })

7) espacio y correr:
  function printData(tweet){
    console.log(tweet.created_at);
    console.log(tweet.text);
    console.log(tweet.user.name);
    console.log(tweet.user.screen_name);
    console.log(tweet.user.location);
    console.log(tweet.user.profile_image_url_https);
  }

8) espacio y correr:
 printData(tweet)

9) espacio y correr
  function tweetToDto(tweet){
    return {
      created_at : tweet.created_at,
      text : tweet.text,
      name : tweet.user.name,
      screen_name : tweet.user.screen_name,
      location : tweet.user.location,
      profile_img : tweet.user.profile_image_url_https,
    }
  }

10) espacio y correr: (para ver el tweet con la info que necesito)
    tweetToDto(tweet)

11) espacio y correr:
    allTweet

12) espacio y correr:
var data = allTweet

13) espacio y correr:
data.statuses

14) espacio y correr
T.get('search/tweets', { q: '#covid since:2011-07-11', count: 100 }, function (err, data, response) {
   allTweet = data.statuses.map(tweet => tweetToDto(tweet));
  })

15) espacio y correr
allTweet

16) la informacion va aparecer en la terminal

17)espacio y correr:
allTweet[(numero del tweet que quiero ver)]
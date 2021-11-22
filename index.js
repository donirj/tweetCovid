const Twit = require('twit')


const T = new Twit({
  consumer_key :  '5aiSVLKAeB2TzX7VbPkNe5yfP',
  consumer_secret : 'Dhv1RPhSFGwkRTvDh2x1eckory0J1aeNmeESgJ8eGwnOrvXLT2',
  access_token :  '252295924-3Y0pbQdM4MmVPMnNxnFVAkJH2grzdBQFMD18bDNO',
  access_token_secret :  'ok5nyMkTonjB7aTQt94etFPGaGH8TX7cVsKURSFzwgPJO',
    timeout_ms:  60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:  true,     // optional - requires SSL certificates to be valid.
  })


T.get('search/tweets', { q: '#covid since:2011-07-11', count: 100 }, function (err, data, response) {
  const allTweetsDto = data.statuses.map(tweet => tweetToDto(tweet));
  saveInDataBase(allTweetsDto)
  })


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


  function saveInDataBase(allTweetsDto){
  //funcion para guardar los tweets en la base de datos
  }

  /*TWEET EJEMPLO*/
  // {
  //   created_at: 'Mon Nov 22 16:58:53 +0000 2021',      
  //   text: 'RT @Giampy_Ass: FUNZIONICCHIA\n' +
  //     '#Olanda  #Burioni #nessunacorrelazione #Pregliasco #Bassetti #quartaondata #NoGreenPass  #Draghi  #greenpass…',
  //   user: {
  //     id: 1036307375744016400,
  //     id_str: '1036307375744016386',
  //     name: 'Stebox',
  //     screen_name: 'Stebox2',
  //     location: '',
     
  //     profile_background_color: 'F5F8FA',
  //     profile_background_image_url: null,
  //     profile_background_image_url_https: null,        
  //     profile_background_tile: false,
  //     profile_image_url: 'http://pbs.twimg.com/profile_images/1447503053914091520/yT-C_iNH_normal.jpg',     
  //     profile_image_url_https: 'https://pbs.twimg.com/profile_images/1447503053914091520/yT-C_iNH_normal.jpg',
  //     profile_link_color: '1DA1F2',
  //     profile_sidebar_border_color: 'C0DEED',
  //     profile_sidebar_fill_color: 'DDEEF6',
  //     profile_text_color: '333333',
  //     profile_use_background_image: true,
  //     has_extended_profile: false,
  //     default_profile: true,
  //     default_profile_image: false,
  //     following: false,
  //     follow_request_sent: false,
  //     notifications: false,
  //     translator_type: 'none',
  //     withheld_in_countries: []
  //   },
  //   geo: null,
  //   coordinates: null,
  //   place: null,
  //   contributors: null,
  //   retweeted_status: {
  //     created_at: 'Mon Nov 22 16:35:21 +0000 2021',    
  //     id: 1462822018525577200,
  //     id_str: '1462822018525577222',
  //     text: 'FUNZIONICCHIA\n' +
  //       '#Olanda  #Burioni #nessunacorrelazione #Pregliasco #Bassetti #quartaondata #NoGreenPass  #Draghi… https://t.co/AFfWJkpDE6',
  //     truncated: true,
  //     entities: {
  //       hashtags: [Array],
  //       symbols: [],
  //       user_mentions: [],
  //       urls: [Array]
  //     },
  //     metadata: { iso_language_code: 'it', result_type: 'recent' },
  //     source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
  //     in_reply_to_status_id: null,
  //     in_reply_to_status_id_str: null,
  //     in_reply_to_user_id: null,
  //     in_reply_to_user_id_str: null,
  //     in_reply_to_screen_name: null,
  //     user: {
  //       id: 1055407818357030900,
  //       id_str: '1055407818357030915',
  //       name: 'Funzionicchia... Forse',
  //       screen_name: 'Giampy_Ass',
  //       location: '',
  //       description: '',
  //       url: null,
  //       entities: [Object],
  //       protected: false,
  //       followers_count: 4438,
  //       friends_count: 2742,
  //       listed_count: 0,
  //       created_at: 'Thu Oct 25 10:36:47 +0000 2018',  
  //       favourites_count: 15914,
  //       utc_offset: null,
  //       time_zone: null,
  //       geo_enabled: false,
  //       verified: false,
  //       statuses_count: 9150,
  //       lang: null,
  //       contributors_enabled: false,
  //       is_translator: false,
  //       is_translation_enabled: false,
  //       profile_background_color: '000000',
  //       profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
  //       profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
  //       profile_background_tile: false,
  //       profile_image_url: 'http://pbs.twimg.com/profile_images/1460158768122052614/QJYQ3PMH_normal.jpg',   
  //       profile_image_url_https: 'https://pbs.twimg.com/profile_images/1460158768122052614/QJYQ3PMH_normal.jpg',
  //       profile_link_color: '1B95E0',
  //       profile_sidebar_border_color: '000000',        
  //       profile_sidebar_fill_color: '000000',
  //       profile_text_color: '000000',
  //       profile_use_background_image: false,
  //       has_extended_profile: false,
  //       default_profile: false,
  //       default_profile_image: false,
  //       following: false,
  //       follow_request_sent: false,
  //       notifications: false,
  //       translator_type: 'none',
  //       withheld_in_countries: []
  //     },
  //     geo: null,
  //     coordinates: null,
  //     place: null,
  //     contributors: null,
  //     is_quote_status: false,
  //     retweet_count: 13,
  //     favorite_count: 19,
  //     favorited: false,
  //     retweeted: false,
  //     possibly_sensitive: false,
  //     lang: 'it'
  //   },
  //   is_quote_status: false,
  //   retweet_count: 13,
  //   favorite_count: 0,
  //   favorited: false,
  //   retweeted: false,
  //   lang: 'it'
  // }
  
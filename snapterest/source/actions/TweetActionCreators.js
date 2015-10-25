var AppDispatcher = require('../dispatcher/AppDispatcher');

//action creator function
function receiveTweet (tweet) {
  //console.log('received new tweet: ', tweet);
  var action = {
    type: 'receive_tweet',
    tweet: tweet
  };

  AppDispatcher.dispatch(action);
}

module.exports = {
  receiveTweet: receiveTweet
};

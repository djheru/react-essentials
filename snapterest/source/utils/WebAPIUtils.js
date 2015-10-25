var SnapkiteStreamClient = require('snapkite-stream-client'),
  TweetActionCreators = require('../actions/TweetActionCreators');

var expObj = {
  initializeStreamOfTweets: function () {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
  }
};

module.exports = expObj;

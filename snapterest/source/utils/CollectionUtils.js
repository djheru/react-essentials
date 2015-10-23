module.exports = {
  getNumberOfTweetsInCollection: function (collection) {
    var TweetUtils = require('./TweetUtils'),
      tweetIds = TweetUtils.getListOfTweetIds(collection);
    return tweetIds.length;
  },

  isEmptyCollection: function (collection) {
    return (this.getNumberOfTweetsInCollection(collection) === 0);
  }
};

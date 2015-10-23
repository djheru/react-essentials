jest.dontMock('../TweetUtils');
describe('Tweet utilities module', function () {

  describe('getListOfTweets()', function () {
    it('returns an array of tweet ids', function () {
      var TweetUtils = require('../TweetUtils');
      var tweetsMock = {
        tweet1: {},
        tweet2: {},
        tweet3: {}
      };

      var expectedTweetIds = [ 'tweet1', 'tweet2', 'tweet3'],
        tweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

      expect(expectedTweetIds).toEqual(tweetIds);
    });
  });
});

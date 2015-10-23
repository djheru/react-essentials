jest.autoMockOff();

describe('Collection Utilities module', function () {
  var CollectionUtils = require('../CollectionUtils'),
    collectionTweetsMock = {
      tweet4: {},
      tweet5: {},
      tweet6: {}
    };

  describe('getNumberOfTweetsInCollection()', function () {
    it('returns the number of tweets in a collection', function () {
      var actualCount = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
      var expectedCount = 3;

      expect(actualCount).toBe(expectedCount);
    });
  });

  describe('isEmptyCollection()', function () {

    it('should return true if passed an empty collection', function () {
      var emptyCollection = {};
      var isEmptyCheck = CollectionUtils.isEmptyCollection(emptyCollection);

      expect(isEmptyCheck).toBe(true);
    });

    it('should return false if passed a non-empty collection', function () {
      var isEmptyCheck = CollectionUtils.isEmptyCollection(collectionTweetsMock);

      expect(isEmptyCheck).toBe(false);
    });
  });
});

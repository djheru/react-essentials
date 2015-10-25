/**
 * How to make a flux store
 */

//1. Get dependencies
var AppDispatcher = require('../dispatcher/AppDispatcher'),
  EventEmitter = require('events').EventEmitter,
  assign = require('object-assign');

//2. Name the event this store uses to communicate changes to components
var CHANGE_EVENT = 'change';

//3. Declare the data that this store is working with
var collectionTweets = {};
var collectionName = 'new';

//4. Define private functions outside of the exported scope to mutate the data in this store
function addTweetToCollection (tweet) {
  collectionTweets[tweet.id] = tweet;
}
function removeTweetFromCollection (tweetId) {
  delete collectionTweets[tweetId];
}
function emptyTweetCollection () {
  collectionTweets = {};
}
function setCollectionName (name) {
  collectionName = name;
}
function emitChange () {
  console.log('emit change event');
  CollectionStore.emit(CHANGE_EVENT);
}

//5. Define an object representing the public interface
//This lets components bind callback handlers to the events emitted by this store
//It also defines accessors to get the data
var publicInterface = {

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCollectionTweets: function () {
    return collectionTweets;
  },

  getCollectionName: function () {
    return collectionName;
  }

};
var CollectionStore = assign({}, EventEmitter.prototype, publicInterface);

//6.
function handleAction(action) {
  switch (action.type) {
    case 'add_tweet_to_collection':
      addTweetToCollection(action.tweet);
      emitChange();
      break;

    case 'remove_tweet_from_collection':
      removeTweetFromCollection(action.tweetId);
      emitChange();
      break;

    case 'remove_all_tweets_from_collection':
      emptyTweetCollection();
      emitChange();
      break;

    case 'set_collection_name':
      setCollectionName(action.collectionName);
      emitChange();
      break;

    default:
  }

}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = CollectionStore;

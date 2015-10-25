var AppDispatcher = require('../dispatcher/AppDispatcher'),
  EventEmitter = require('events').EventEmitter,
  assign = require('object-assign');

var tweet = null;

var TweetStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  getTweet: function () {
    return tweet;
  }
});

//The setter is private - Trigger an action to set.
//If you set someone no you get murdered
function setTweet(receivedTweet) {
  tweet = receivedTweet;
}

//Private method to emit the change event for components who are interested
function emitChange() {
  TweetStore.emit('change');
}

function handleAction (action) {
  if (action.type === 'receive_tweet') {
    //console.log('receive_tweet');
    setTweet(action.tweet);
    emitChange();
  }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = TweetStore;

var React = require('react'),
  Stream = require('./Stream.react'),
  Collection = require('./Collection.react');

var Application = React.createClass({
  getInitialState: function () {
    return {
      collectionTweets: {

      }
    };
  },

  addTweetToCollection: function (tweet) {
    this.updateTweetCollection(tweet);
  },

  removeTweetFromCollection: function (tweet) {
    this.updateTweetCollection(tweet, true);
  },

  updateTweetCollection: function (tweet, deleteFlag) {
    var collectionTweets = this.state.collectionTweets;
    if (deleteFlag === true) {
      delete collectionTweets[tweet.id];
    } else {
      collectionTweets[tweet.id] = tweet;
    }
    this.setState({collectionTweets: collectionTweets});
  },

  emptyTweetCollection: function () {
    this.setState({collectionTweets: {}});
  },

  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div classNmae="col-md-8">
            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.emptyTweetCollection} />
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Application;


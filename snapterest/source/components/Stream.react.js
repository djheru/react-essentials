var React = require('react'),
  SnapkiteStreamClient = require('snapkite-stream-client'),
  StreamTweet = require('./StreamTweet.react'),
  Header = require('./Header.react');

var Stream = React.createClass({
  getInitialState: function () {
    return {
      tweet: null
    };
  },

  componentDidMount: function () {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount: function () {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet: function (tweet) {
    this.setState({
      tweet: tweet
    });
  },

  render: function () {
    var tweet = this.state.tweet;

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection} />
      );
    }

    return (
      <Header text="Waiting for tweets..." />
    );
  }
});
module.exports = Stream;

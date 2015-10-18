var React = require('react'),
  ReactDOM = require('react-dom'),
  Header = require('./Header.react'),
  Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

  getInitialState: function () {
    console.log('[Snapterest] 1. StreamTweet running getInitialState()');
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    }
  },

  componentWilLMount: function () {
    console.log('[Snapterest] 2. StreamTweet running componentWillMount()');
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest Public Photo from Twitter'
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }
  },

  render: function () {
    console.log('[Snapterest] StreamTweet running render()');
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection} />
      </section>
    );
  },

  componentDidMount: function () {
    console.log('[Snapterest] 3. StreamTweet running componentDidMount()');
    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHTML = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHTML = componentDOMRepresentation.children[1].outerHTML;
  },

  componentWillUnmount: function () {
    console.log('[Snapterest] 8. Running componentWillUnmount()');
    delete window.snapterest;
  }

});
module.exports = StreamTweet;

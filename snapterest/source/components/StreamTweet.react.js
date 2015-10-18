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

  componentDidMount: function () {
    console.log('[Snapterest] 3. StreamTweet running componentDidMount()');
    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHTML = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHTML = componentDOMRepresentation.children[1].outerHTML;
  },

  componentWillReceiveProps: function (nextProps) {
    console.log('[Snapterest] 4. StreamTweet running componentWillReceiveProps()');
    var currentTweetLength = this.props.tweet.length,
      nextTweetLength = nextProps.tweet.text.length,
      isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength),
      headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });
    headerText = (isNumberOfCharactersIncreasing) ?
      'Number of characters is increasing' : 'Latest public photo from twitter';
    this.setState({
      headerText: headerText
    });
    window.snapterest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate: function() {
    console.log('[Snapterest] 5. StreamTweet running shouldComponentUpdate()');
    return (nextProps.tweet.text.length > 1);
  },

  componentWillUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] 6. StreamTweet running componentWillUpdate()');
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

  componentDidUpdate: function (prevProps, prevState) {
    console.log('[Snapterest] 7. StreamTweet running componentDidUpdate()');

    window.snapterest.numberOfDisplayedTweets++;
  },

  componentWillUnmount: function () {
    console.log('[Snapterest] 8. Running componentWillUnmount()');
    delete window.snapterest;
  }

});
module.exports = StreamTweet;
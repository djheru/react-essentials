var React = require('react');

var tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
};

var imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff'
};

var Tweet = React.createClass({

  //use this property to validate. Pass either a function that returns an Error object on failure
  //or use one of the built-in validators: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
  propTypes: {
    tweet: function (properties, propertyName, componentName) {
      var tweet = properties[propertyName];
      if (!tweet) {
        return new Error('Tweet must be set');
      }
      if (!tweet.media) {
        return new Error('Tweet must have an image');
      }
    },

    onImageClick: React.PropTypes.func
  },

  handleIMageClick: function () {
    var tweet = this.props.tweet;
    var onImageClick = this.props.onImageClick;
    if (onImageClick) {
      onImageClick(tweet);
    }
  },

  render: function () {
    var tweet = this.props.tweet;
    console.log(tweet)
    var tweetMediaUrl = tweet.media[0].url;

    return (
      <div style={tweetStyle}>
        <img src={tweetMediaUrl} onClick={this.handleIMageClick} style={imageStyle} />
      </div>
    );
  }
});

module.exports = Tweet;

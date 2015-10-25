var React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  CollectionControls = require('./CollectionControls.react'),
  TweetList = require('./TweetList.react'),
  Header = require('./Header.react'),
  CollectionUtils = require('../utils/CollectionUtils'),
  CollectionStore = require('../stores/CollectionStore');

var Collection = React.createClass({

  getInitialState: function () {
    console.log(CollectionStore.getCollectionTweets());
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    }
  },

  componentDidMount: function () {
    CollectionStore.addChangeListener(this.onCollectionChange);
  },

  componentWillUnmount: function () {
    CollectionStore.removeChangeListener(this.onCollectionChange);
  },

  onCollectionChange: function () {
    console.log('onCollectionChange');
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    });
  },

  createHTMLMarkupStringOfTweetList: function () {
    var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.state.collectionTweets} />
    );

    var htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  },

  render: function () {
    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
    var htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      var htmlMarkup = this.createHTMLMarkupStringOfTweetList();

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup} />
          <TweetList
            tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your Collection is Empty" />
  }
});

module.exports = Collection;

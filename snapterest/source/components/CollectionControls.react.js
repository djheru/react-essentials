var React = require('react'),
  Header = require('./Header.react'),
  Button = require('./Button.react'),
  CollectionRenameForm = require('./CollectionRenameForm.react'),
  CollectionExportForm = require('./CollectionExportForm.react'),
  CollectionActionCreators = require('../actions/CollectionActionCreators'),
  CollectionStore = require('../stores/CollectionStore');

var CollectionControls = React.createClass({

  getInitialState: function () {
    return {
      isEditingName: false
    };
  },

  getHeaderText: function () {
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection,
      singularPlural = (numberOfTweetsInCollection === 1) ? 'tweet' : 'tweets',
      text = numberOfTweetsInCollection + ' ' + singularPlural + ' in your',
      name = CollectionStore.getCollectionName();

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  },

  toggleEditCollectionName: function () {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  removeAllTweetsFromCollection: function () {
    CollectionActionCreators.removeAllTweetsFromCollection();
  },

  setCollectionName: function (name) {
    this.setState({
      name: name,
      isEditingName: false
    });
  },

  render: function () {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          onCancelCollectionNameChange={this.toggleEditCollectionName} />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button
          label="Rename Collection"
          handleClick={this.toggleEditCollectionName} />
        <Button
          label="Empty Collection"
          handleClick={this.removeAllTweetsFromCollection} />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }

});

module.exports = CollectionControls;

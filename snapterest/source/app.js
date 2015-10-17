var React = require('react')
  , ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  getInitialState: function () {
    return {
      isHeaderHidden: false
    };
  },
  handleClick: function () {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },
  render: function () {
    var title = this.props.title || 'Stateful React Component';
    var headerElement = React.createElement('h1', {className: 'header', key: 'header'}, title);
    var buttonElement = React.createElement(
      'button',
      {
        className: 'btn btn-default',
        onClick: this.handleClick,
        key: 'button'
      },
      'Toggle Header');
    if (this.state.isHeaderHidden) {
      return React.createElement('div', null, [buttonElement]);
    }
    return React.createElement('div', null, [ buttonElement, headerElement ]);
  }
});

var reactComponentElement = React.createElement(ReactClass, {title: 'Yo mama a ho'});
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

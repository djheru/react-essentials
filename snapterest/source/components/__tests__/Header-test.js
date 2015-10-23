jest.dontMock('../Header.react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Header = require('../Header.react');

describe('Header Component', function () {

  it('renders provided header text', function () {
    var testString = "OMGSORENDERED";

    var header = TestUtils.renderIntoDocument(
      <Header text={testString} />
    );

    var headerText = ReactDOM.findDOMNode(header).textContent;
    expect(headerText).toBe(testString);
  });

  it('displays default text if no string is provided', function () {
    var header = TestUtils.renderIntoDocument(
      <Header />
    );

    var headerText = ReactDOM.findDOMNode(header).textContent;
    expect(headerText).toBe('Default header');
  });
});

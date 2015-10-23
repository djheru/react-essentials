jest.dontMock('../Button.react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Button = require('../Button.react');

describe('Button component', function () {

  it('calls the handler function once on click', function () {
    var handleClick = jest.genMockFunction();
    var button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );

    var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

    TestUtils.Simulate.click(buttonInstance);
    expect(handleClick).toBeCalled();

    var handlerCallCount = handleClick.mock.calls.length;
    expect(handlerCallCount).toBe(1);
  });

});

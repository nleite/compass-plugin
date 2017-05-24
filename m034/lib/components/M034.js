'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var M034Actions = require('../actions');
var ToggleButton = require('./toggle-button');
var LoadHW = require('./loadHomework');

var debug = require('debug')('mongodb-compass:m034');

var M034Component = function (_React$Component) {
  _inherits(M034Component, _React$Component);

  function M034Component() {
    _classCallCheck(this, M034Component);

    return _possibleConstructorReturn(this, (M034Component.__proto__ || Object.getPrototypeOf(M034Component)).apply(this, arguments));
  }

  _createClass(M034Component, [{
    key: 'onClick',
    value: function onClick() {
      M034Actions.toggleStatus();
    }

    /**
     * Render M034 component.
     *
     * @returns {React.Component} The rendered component.
      */

  }, {
    key: 'render',
    value: function render() {
      var cssclass = this.props.status == "CORRECT" ? "alert alert-success" : "alert alert-danger";
      var body = React.createElement(
        'div',
        { className: 'm034' },
        React.createElement(
          'h2',
          { className: 'm034-title' },
          'MongoDB University Homework'
        ),
        React.createElement(
          'p',
          null,
          ' ',
          this.props.hw.title
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'i',
            null,
            this.props.hw.question
          )
        ),
        React.createElement(
          'div',
          { className: cssclass },
          ' ',
          React.createElement(
            'strong',
            null,
            ' ',
            this.props.status
          ),
          ' '
        )
      );

      return body;
    }
  }]);

  return M034Component;
}(React.Component);

M034Component.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

M034Component.defaultProps = {
  status: 'enabled'
};

M034Component.displayName = 'M034Component';

module.exports = M034Component;
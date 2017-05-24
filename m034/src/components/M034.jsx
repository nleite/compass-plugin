const React = require('react');
const PropTypes = require('prop-types');
const M034Actions = require('../actions');
const ToggleButton = require('./toggle-button');
const LoadHW = require('./loadHomework');

const debug = require('debug')('mongodb-compass:m034');

class M034Component extends React.Component {

  onClick() {
    M034Actions.toggleStatus();
  }


  /**
   * Render M034 component.
   *
   * @returns {React.Component} The rendered component.

   */
  render() {
    const cssclass = this.props.status == "CORRECT" ? "alert alert-success" : "alert alert-danger"
    let body = (
      <div className="m034">
      <h2 className="m034-title">MongoDB University Homework</h2>
      <p> {this.props.hw.title}</p>
      <p><i>{this.props.hw.question}</i></p>
      <div className={cssclass}> <strong> {this.props.status}</strong> </div>
    </div>);

    return body;
  }
}

M034Component.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

M034Component.defaultProps = {
  status: 'enabled',
};

M034Component.displayName = 'M034Component';

module.exports = M034Component;

const React = require('react');
const { StoreConnector } = require('hadron-react-components');
const M034Component = require('./M034');
const Store = require('../stores');
const Actions = require('../actions');

// const debug = require('debug')('mongodb-compass:m034:index');

class ConnectedM034Component extends React.Component {
  /**
   * Connect M034Component to store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={Store}>
        <M034Component actions={Actions} {...this.props} />
      </StoreConnector>
    );
  }
}

ConnectedM034Component.displayName = 'ConnectedM034Component';

module.exports = ConnectedM034Component;

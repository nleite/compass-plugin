'use strict';

var Reflux = require('reflux');
var M034Actions = require('../actions');
var StateMixin = require('reflux-state-mixin');
var axios = require('axios');

var debug = require('debug')('mongodb-compass:stores:m034');

/**
 * M034 store.
 */
var M034Store = Reflux.createStore({
  /**
   * adds a state to the store, similar to React.Component's state
   * @see https://github.com/yonatanmn/Super-Simple-Flux#reflux-state-mixin
   *
   * If you call `this.setState({...})` this will cause the store to trigger
   * and push down its state as props to connected components.
   */
  mixins: [StateMixin.store],

  /**
   * listen to all actions defined in ../actions/index.jsx
   */
  listenables: M034Actions,

  /**
   * Initialize everything that is not part of the store's state.
   */
  init: function init() {},


  /**
   * This method is called when all plugins are activated. You can register
   * listeners to other plugins' stores here, e.g.
   *
   * appRegistry.getStore('OtherPlugin.Store').listen(this.otherStoreChanged.bind(this));
   *
   * If this plugin does not depend on other stores, you can delete the method.
   *
   * @param {Object} appRegistry   app registry containing all stores and components
   */
  onActivated: function onActivated(appRegistry) {
    // appRegistry.getStore('CRUD.ResetDocumentStore'), ResetDocumentStore)
    this.CollectionStore = appRegistry.getStore('App.CollectionStore');
    appRegistry.getStore('Query.ChangedStore').listen(this.checkHomework.bind(this));
  },


  /**
   * This method is called when the data service is finished connecting. You
   * receive either an error or the connected data service object, and if the
   * connection was successful you can now make calls to the database, e.g.
   *
   * dataService.command('admin', {connectionStatus: 1}, this.handleStatus.bind(this));
   *
   * If this plugin does not need to talk to the database, you can delete this
   * method.
   *
   * @param {Object} error         the error object if connection was unsuccessful
   * @param {Object} dataService   the dataService object if connection was successful
   *
   */
  onConnected: function onConnected(error, dataService) {
    this.dataService = dataService;
  },
  greaterThan: function greaterThan(actual, expected) {
    return actual > expected;
  },
  validateRules: function validateRules(rules, docs) {
    var self = this;
    var ok = false;
    for (var name in rules) {
      if (self[name] === undefined) {
        debug("no such function, moving along");
        continue;
      }
      ok = self[name](docs.length, rules[name]);
      if (!ok) {
        break;
      }
    }
    return ok;
  },
  findExercise: function findExercise(hw, query) {
    var _this = this;

    var options = {};
    if (query.limit) {
      options.limit = query.limit;
    };
    if (query.project) {
      options.project = query.project;
    }
    if (query.skip) {
      options.skip = query.skip;
    }
    if (query.sort) {
      options.sort = query.sort;
    }
    this.dataService.find(query.ns, query.filter, options, function (err, docs) {
      if (err) {
        debug(err.message);
      }

      var ok = _this.validateRules(hw.validation.rule, docs);
      var status = ok ? "CORRECT" : "INCORRECT";
      _this.setState({ status: status, hw: hw });
    });
  },
  collectionExercise: function collectionExercise() {},
  checkHomework: function checkHomework(query) {
    var _this2 = this;

    console.log('###########################');
    console.log(query);
    axios.get('http://localhost:3000/exercise').then(function (res) {
      var hw = res.data;
      _this2.findExercise(hw, query);
    });
  },

  /**
   * Initialize the M034 store state. The returned object must
   * contain all keys that you might want to modify with this.setState().
   *
   * @return {Object} initial store state.
   */
  getInitialState: function getInitialState() {
    return {
      status: 'INCORRECT',
      hw: {}
    };
  },


  /**
   * log changes to the store as debug messages.
   * @param  {Object} prevState   previous state.
   */
  storeDidUpdate: function storeDidUpdate(prevState) {
    debug('M034 store changed from', prevState, 'to', this.state);
  }
});

module.exports = M034Store;
const M034Component = require('./lib/components');
const M034Actions = require('./lib/actions');
const M034Store = require('./lib/stores');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'University Homework',
  component: M034Component
};

/**
 * Activate all the components in the M034 package.
 */
function activate() {
  // Register the M034Component as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab
  //   - Database.Tab
  //   - Collection.Tab
  //   - CollectionHUD.Item
  //   - Header.Item

  global.hadronApp.appRegistry.registerRole('Collection.Tab', ROLE);
  global.hadronApp.appRegistry.registerAction('M034.Actions', M034Actions);
  global.hadronApp.appRegistry.registerStore('M034.Store', M034Store);
}

/**
 * Deactivate all the components in the M034 package.
 */
function deactivate() {
  global.hadronApp.appRegistry.deregisterRole('Collection.Tab', ROLE);
  global.hadronApp.appRegistry.deregisterAction('M034.Actions');
  global.hadronApp.appRegistry.deregisterStore('M034.Store');
}

module.exports = M034Component;
module.exports.activate = activate;
module.exports.deactivate = deactivate;

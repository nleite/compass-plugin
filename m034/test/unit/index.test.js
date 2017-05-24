const expect = require('chai').expect;
const M034Store = require('../../lib/stores');

describe('M034Store', function() {
  beforeEach(function() {
    // reset the store to initial values
    M034Store.setState(M034Store.getInitialState());
  });

  it('should have an initial state of {status: \'enabled\'}', function() {
    expect(M034Store.state.status).to.be.equal('enabled');
  });

  describe('toggleStatus()', function() {
    it('should switch the state to {status: \'disabled\'}', function() {
      M034Store.toggleStatus();
      expect(M034Store.state.status).to.be.equal('disabled');
    });

    it('should switch the state back to {status: \'enabled\'} when used a second time', function() {
      M034Store.toggleStatus();
      M034Store.toggleStatus();
      expect(M034Store.state.status).to.be.equal('enabled');
    });
  });
});

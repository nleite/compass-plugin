const React = require('react');
const PropTypes = require('prop-types');
const M034Actions = require('../actions');

class LoadHW extends React.Component {

   render() {
       return (
         <div>
           <h1>{this.props.title}</h1>
           <h1>{this.props.ndocs}</h1>
         </div>
       );
     }
}

LoadHW.propTypes = {
  children: PropTypes
};

LoadHW.displayName = 'Current HW';

module.exports = LoadHW;

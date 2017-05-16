var React = require('react');

// ES5 Way of creating components. (Depreciated)
// var Hdb = React.createClass({
//   render: function() {
//     return <h1>Hello World This is New!</h1>
//   }
// });

// ES6 Way of creating components. (Use this now)
class Hdb extends React.Component {
  render() {
    return <h1>Hello. New way of doing this.</h1>
  }
}

module.exports = Hdb;

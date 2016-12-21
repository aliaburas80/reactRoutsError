var React = require('react');
var Base = React.createClass({
  render:function(){
    return (
        <div>
            <h1>This is the Header</h1>
              {this.props.children}
            <footer>Page Footer</footer>
      </div>
    );
  }
});
module.exports = Base;

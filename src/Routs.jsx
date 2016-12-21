var React      = require('react');
var ReactRouter= require('react-router');
var Router     = ReactRouter.Router;
var Route      = ReactRouter.Route;
var Base       = require('./components/Base.jsx');
var page1      = require('./components/Page1.jsx');
var page2      = require('./components/Page2.jsx');
var Routes = (
  <Router>
    <Route path="/" component={Base}>
      <Route Path="/page1" component={page1}/>
      <Route path="/Page2" component={page2}/>
    </Route>
  </Router>
);

module.exports=Routes;

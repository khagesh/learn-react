'use strict'

var React = require('react');
var PricingTemplate1 = require('./PricingTemplate1');

var PricingTemplate1Container = React.createClass({
	render: function(){
		var elementCount = 4,
			templates = [];
		for(var index=0; index < elementCount ; index++){
			templates.push(<PricingTemplate1 />);
		}

		return <div className="template-container">{templates}</div>
	}
});

module.exports = PricingTemplate1Container;
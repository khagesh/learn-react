"use strict";

var React = require("react");
var PricingTemplate1 = require("./PricingTemplate1");

var PricingTemplate1Container = React.createClass({
	displayName: "PricingTemplate1Container",

	render: function render() {
		var elementCount = 4,
		    templates = [];
		for (var index = 0; index < elementCount; index++) {
			templates.push(React.createElement(PricingTemplate1, null));
		}

		return React.createElement(
			"div",
			null,
			templates
		);
	}
});

module.exports = PricingTemplate1Container;
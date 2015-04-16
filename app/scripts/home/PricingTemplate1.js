"use strict";

var React = require("react");

var PricingTemplate1 = React.createClass({
				displayName: "PricingTemplate1",
				render: function render() {
								var templateClass = "template-1";
								return React.createElement(
												"div",
												{ className: "template-1" },
												React.createElement(
																"div",
																{ className: "vertical-align-middle template-1-header" },
																" AWS "
												),
												React.createElement(
																"div",
																{ className: "template-1-content" },
																React.createElement(
																				"ul",
																				{ className: "template-1-list" },
																				React.createElement(
																								"li",
																								{ className: "vertical-align-middle template-1-list-item-odd" },
																								" 10 GB User Space "
																				),
																				React.createElement(
																								"li",
																								{ className: "vertical-align-middle template-1-list-item-even" },
																								" ParaVirtualisation "
																				),
																				React.createElement(
																								"li",
																								{ className: "vertical-align-middle template-1-list-item-odd" },
																								" VMWare Space "
																				),
																				React.createElement(
																								"li",
																								{ className: "vertical-align-middle template-1-list-item-even" },
																								" nGinx Loaders "
																				),
																				React.createElement(
																								"li",
																								{ className: "vertical-align-middle template-1-list-item-odd" },
																								" Limited Online Support "
																				)
																)
												),
												React.createElement(
																"div",
																{ className: "vertical-align-middle template-1-footer" },
																"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
																React.createElement(
																				"div",
																				{ className: "content" },
																				" Team "
																)
												)
								);
				}
});

module.exports = PricingTemplate1;
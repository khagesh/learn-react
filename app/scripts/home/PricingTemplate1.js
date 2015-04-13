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
																{ className: "template-1-header" },
																"Text"
												),
												React.createElement(
																"div",
																{ className: "template-1-content" },
																React.createElement(
																				"ul",
																				{ className: "template-1-list" },
																				React.createElement(
																								"li",
																								{ className: "template-1-list-item-odd" },
																								" 10 GB User Space "
																				),
																				React.createElement(
																								"li",
																								{ className: "template-1-list-item-even" },
																								" ParaVirtualisation "
																				),
																				React.createElement(
																								"li",
																								{ className: "template-1-list-item-odd" },
																								" VMWare Space "
																				),
																				React.createElement(
																								"li",
																								{ className: "template-1-list-item-even" },
																								" nGinx Loaders "
																				),
																				React.createElement(
																								"li",
																								{ className: "template-1-list-item-odd" },
																								" Limited Online Support "
																				)
																)
												),
												React.createElement(
																"div",
																{ className: "template-1-footer" },
																" Bottom content "
												)
								);
				}
});

module.exports = PricingTemplate1;
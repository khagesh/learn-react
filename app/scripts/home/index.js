"use strict";

var React = require("react");
var Hello = require("./Hello");
var PricingTemplate1 = require("./PricingTemplate1");
var PricingTemplate1Container = require("./PricingTemplate1Container");

React.render(React.createElement(PricingTemplate1Container, null), document.getElementById("react-container"));
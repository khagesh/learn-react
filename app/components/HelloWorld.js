"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Hello = React.createClass({
    displayName: "Hello",

    render: function render() {
        return React.createElement(
            "h1",
            null,
            "Hello ",
            this.props.name,
            "!!"
        );
    }
});

exports.Hello = Hello;
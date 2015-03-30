/** @jsx React.DOM */

var Hello = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        )
    }
});
const Hello = React.createClass({
    render(){
        return (
            <h1>Hello {this.props.name}!!</h1>
        )
    }
});

export { Hello }
const React = require('react');
const ReactDOM = require('react-dom');

const mountPoint = document.getElementById('mount');

const HelloWorld = React.createClass({
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
});

ReactDOM.render(
    <HelloWorld/>, mountPoint
);

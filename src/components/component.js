import React,{Component} from 'react';
class ComponentOne extends Component {

// Defining the componentWillUnmount method
componentWillUnmount() {
	alert('The component is going to be unmounted');
}

render() {
	return <h1>hHello Geeks!</h1>;
}
}




class App1 extends React.Component {
    state = { display: true };
    delete = () => {
        this.setState({ display: false });
    };
    
    render() {
        let comp;
        if (this.state.display) {
        comp = <ComponentOne />;
        }
        return (
        <div>
            {comp}
            <button onClick={this.delete}>
            Delete the component
            </button>
        </div>
        );
    }
    }
    
    export default App1;
    
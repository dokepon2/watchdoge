import React from 'react';


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null
        }}

    handleAddress(event) {
        event.preventDefault();
        const address = this.refs.address
        const value = address.value;
        this.setState({ error: null });
        this.props.inputAddress(value);
    }

    render(){
		return(
			<form onSubmit={this.handleAddress.bind(this)}>
				<input type="text" placeholder="Enter Dogecoin address" ref="address" />
				<button type="submit">Get Balance</button>
			</form>
		)
	}
}
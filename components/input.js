import React from 'react';

export default class AddressInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null
        }
    }

    renderError() {
        if (!this.state.error) {
            return null
        }
        return <div style={{color: 'red'}}>{this.state.error}</div>
    }

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
				<input type="text" placeholder="Enter your Dogecoin wallet address" ref="address" />
				<button>Get Balance</button>
				{this.renderError()}
			</form>
		)
	}
}
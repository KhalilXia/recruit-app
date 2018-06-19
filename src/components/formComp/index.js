import React, { Component } from 'react';
function WrappedForm(Comp){
	class FormComp extends Component {
	    constructor(props) {
	        super(props);
	        this.state ={};
	        this.handleChange = this.handleChange.bind(this);
	    };
	    handleChange(key, value) {
			this.setState({
				[key]: value
			});
		};
	    render() {
	        return (
				<Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
	        	)
	    };
	}
	return FormComp
}


export default WrappedForm;

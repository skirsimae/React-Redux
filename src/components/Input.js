import React from 'react'

export default class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="input">
				<label>
					Enter Threshold <br/>
					<input type="text" name="threshold" value="BTC00,00"/>
				</label>
			</form>
		);
	}
}

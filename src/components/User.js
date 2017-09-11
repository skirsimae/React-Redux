import React from 'react'

export default class User extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="user">
				<p>Welcome, user | Logout </p>
			</section>
		);
	}
}
